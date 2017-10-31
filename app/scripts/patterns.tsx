/*
 * Basic Patterns implementation for Gibberish
 */

import { Markov } from "./Markov";
import { Genetic } from "./Genetic";


let Patterns = {
	Pattern: (pattern) => [() => pattern.next().value],

	Pseq: function* Pseq(values: Array<any>, repetitions: number){
		var index: number = 0;
		var result = (): any => values[index++ % values.length];

		if(repetitions == undefined) {
			while(true) {
				yield result();
			}
		}
		else {
			for(var i=0; i<repetitions; i++) {
				yield result();
			}
		}
	},

	Prand: function* Prand(values: Array<any>, repetitions: number){

		var result = (): any => values[Math.floor(Math.random() * values.length)];

		if(repetitions == undefined) {
			while(true) {
				yield result();
			}
		}
		else {
			for(var i=0; i<repetitions; i++) {
				yield result();
			}
		}
	},

	Pmarkov: function* Pmarkov(seed: Array<any>, order: number, initialState: Array<any>) {
		let markovChain: Markov = new Markov(seed, order);

		let lastState: any = initialState;

		while(true) {
			let nextState: any = markovChain.getNextState(lastState);

			lastState = [lastState[lastState.length-1], nextState];

			yield nextState;
		}
	},
	exportToScope: (namespace): void => {
		for (var key in Patterns) {
			namespace[key] = Patterns[key];
		}
	},
};

export { Patterns };

