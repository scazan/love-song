
import utils from "./utils";


class Genetic {
	population: number[][];
	goal: number[];
	scores: number[];

	constructor(input: number[][], goal: number[]) {
		this.population = input;
		this.scores = Array(input.length).fill(0);
		this.goal = goal;
	}


	// Accumulate and return the score for a single collection
	getTotalFitnessRating(collection: number[], goal: number[]) {
		let score: number = 0; // lower is better

		for(let i=collection.length-1; i >= 0; i--) {
			score = this.getDistance(collection[i], goal[i]);
		}

		return score;
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
		let newGeneration = [];

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

