
import utils from "./utils";


class Genetic {
	population: number[][];
	goal: number[];
	scores: number[];

	constructor(inputPopulation: number[][], goal: number[]) {
		this.population = inputPopulation;
		this.scores = Array(inputPopulation.length).fill(0);
		this.goal = goal;
	}


	// Accumulate and return the score for a single collection
	getTotalFitnessRating(collection: number[], goal: number[]) {
		let score: number = 0; // lower is better

		for(let i=collection.length-1; i >= 0; i--) {
			score += this.getDistance(collection[i], goal[i]);
		}

		return score;
	}

	// TODO: test
	// Using the given scores, get the most "fit" two generations out of the population
	getTopTwoGenerations(scores:number[], population:number[][]):number[][] {

		let indexOfHighestScore = 0;

		for(let i=scores.length-1; i>=0; i--) {
			if(scores[indexOfHighestScore] < scores[i]) {
				indexOfHighestScore = i;
			}

			// If there are two of the same scores, choose one randomly
			if(scores[indexOfHighestScore] === scores[i]) {
				const coinFlip = Math.random();

				indexOfHighestScore = (coinFlip > 0.5) ? indexOfHighestScore : i;
			}
		}

		let indexOfNextHighestScore = 0;
		const topGenerationScore = scores[indexOfHighestScore];

		for(let i=scores.length-1; i>=0; i--) {
			// Ignore any scores that are the highest score
			if(scores[i] !== topGenerationScore) {

				if(scores[indexOfNextHighestScore] < scores[i]) {
					indexOfNextHighestScore = i;
				}

				// If there are two of the same scores, choose one randomly
				if(scores[indexOfNextHighestScore] === scores[i]) {
					const coinFlip = Math.random();

					indexOfNextHighestScore = (coinFlip > 0.5) ? indexOfNextHighestScore : i;
				}
			}
		}

		//return [[],[]];
		return [population[indexOfHighestScore], population[indexOfNextHighestScore] ];
	}

	// TODO: Make more than one type of mating
	// Take in two arrays (parents) and mate them in a number of different ways to produce multiple offspring
	mateGenerations(parents:number[][]):number[][] {

		const splicedParents = this.getSplicedOffspring(parents[0], parents[1]);
		// Generate more than one offspring
		return [splicedParents, splicedParents];
	}

	// Splice two equal-length arrays together and return the result
	getSplicedOffspring(parentOne:number[], parentTwo:number[]):number[] {
		const coinFlip:number = Math.random() > 0.5 ? 1 : 0;
		const parents = coinFlip == 0 ? [parentOne, parentTwo] : [parentTwo, parentOne];
		const splitPoint:number = Math.floor(parentOne.length / 2);

		const splicedOffspring = [...parents[0].slice(0, splitPoint), ...parents[1].slice(splitPoint-1, parents[1].length-1) ];

		return splicedOffspring;
	}

	// Returns a numerical distance between an input and a goal
	getDistance(input: number, goal: number) {
		let rating: number = goal - input;

		return rating;
	}





	// Calculate and return the scores for all current collections
	getPopulationScores(population: number[][], goal: number[]): number[] {
		let scores = Array(population.length).fill(0);

		for(let i=(population.length-1); i>=0; i--) {
			scores[i] = this.getTotalFitnessRating(population[i], goal);
		}

		return scores;
	}

	getNextGeneration(score: number, population: number[][]) {
		const populationScores:number[] = this.getPopulationScores(population, this.goal);
		const topTwoGenerations:number[][] = this.getTopTwoGenerations(populationScores, population);
		const newGenerations:number[][] = this.mateGenerations(topTwoGenerations);

		// For now randomly select one of the best generations
		const bestFitGeneration = newGenerations[Math.floor(Math.random() * (newGenerations.length * 0.999))];

		const newGeneration = [];
		return newGeneration;
	}

	getNextState(state: number[]) {

		//let fitnessScore: number = this.getTotalFitnessRating(this.population, this.goal);
		
		//let nextState: number[] = this.getNextGeneration(fitnessScore, this.population);

		//return nextState;
	}

	asPattern() {
		let self = this;

		return function* asPattern(initialState: number[]) {
			/*self.lastState = initialState;*/

			while(true) {
				/*let nextState = self.getNextState(self.lastState);*/
				/*self.lastState = [self.lastState[self.lastState.length-1], nextState];*/

				/*yield nextState;*/
			}
		};
	}

};

export { Genetic };

