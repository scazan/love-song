/*
 * Basic Patterns implementation for Gibberish
 */

let Markov = require("./Markov")();

module.exports = function() {

	let Patterns = {
		Pattern: (pattern) => [() => pattern.next().value],

		Pseq: function* Pseq(values, repetitions){
			var index = 0;
			var result = () => values[index++ % values.length];

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

		Prand: function* Prand(values, repetitions){

			var result = () => values[Math.floor(Math.random() * values.length)];

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

		Pmarkov: function* Pmarkov(seed, order, initialState) {
			let markovChain = new Markov(seed, order);

			let lastState = initialState;

			while(true) {
				let nextState = markovChain.getNextState(lastState);

				lastState = [lastState[lastState.length-1], nextState];

				yield nextState;
			}
		},
		exportToScope: (namespace) => {
			for (var key in Patterns) {
				namespace[key] = Patterns[key];
			}
		},
	};

	return Patterns;

};
