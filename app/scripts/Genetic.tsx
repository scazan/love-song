
import utils from "./utils";


class Genetic {
	population: Array<number>;
	goal: Array<number>;

	constructor(input, goal) {
		this.population = input;
		this.goal = goal;
	}

	getTotalFitnessRating(input: Array<number>, goal: Array<number>) {
		let score: number = 0; // lower is better

		for(let i=input.length-1; i >= 0; i--) {
			score = this.getFitnessRating(input[i], goal[i]);
		}

		return score;
	}

	getFitnessRating(input: number, goal: number) {
		let rating: number = goal - input;

		return rating;
	}

	getNextGeneration(score: number, population: Array<number>) {
		let newPopulation = [];

		return newPopulation;
	}

	getNextState(state: Array<number>) {

		let fitnessScore: number = this.getTotalFitnessRating(this.population, this.goal);
		
		let nextState: Array<number> = this.getNextGeneration(fitnessScore, this.population);

		return nextState;
	}

	asPattern() {
		let self = this;

		return function* asPattern(initialState: Array<number>) {
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

