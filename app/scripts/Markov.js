

let isEquivalent = (a, b) => {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
};

	let utils = {
		normalize: (coll) => {
			let collSum = coll.reduce((a,b) => a+b);
			return collSum > 0 ? coll.map( (weight) => weight / collSum) : coll.map(() => 0);
		},
		windex: (weights) => {
			let sumOfWeights = weights.reduce( (prev, curr) => prev + curr);

			let randNum = Math.random() * sumOfWeights;
			let weightSum = 0;

			for (let i = 0; i < weights.length; i++) {
				weightSum += weights[i];
				weightSum = +weightSum.toFixed(2);

				if (randNum <= weightSum) {
					return i;
				}
			}
		},
	};

	class Markov {
		constructor(input, order) {
			this.dictionary = [],
			this.combinations = [];

			// Set a default last state for stream behavior
			this.lastState = [];
			for(let i=0; i < order; i++) {
				this.lastState.push(input[i]);
			}

			this.transitionMatrix = this.createTransitionMatrix(input, order);
		}

		createTransitionMatrix(input, order) {

			this.dictionary = input.filter(function(elem, pos) {
				return input.indexOf(elem) == pos;
			});

			// Computer all possible combinations of the dictionary
			this.combinations = [];
			for(let i=0; i < this.dictionary.length; i++) {
				for(let k=0; k < this.dictionary.length; k++) {
					this.combinations.push([this.dictionary[i], this.dictionary[k]]);
				}
			}


			// Setup the transitionMatrix (should be based on order)
			//TODO: This is hardcoded to 2nd order. Make dynamic.
			let transitionMatrix = [];
			for(let i=0; i < this.combinations.length; i++) {
				let dictionaryLengthArray = [];

				for(let k=0; k < this.dictionary.length; k++) {
					dictionaryLengthArray.push(0);
				}

				transitionMatrix.push(dictionaryLengthArray);
			}

			// Tally the given combinations to add into the transitionMatrix
			for(let i=0; i < input.length; i++) {
				let currentState;

				if(i == 0) {
					currentState = [ input[input.length-1], input[i] ];
				}
				else {
					currentState = [ input[i-(order-1)], input[i] ];
				}

				let indexOfCurrentState = this.combinations.findIndex( (item) => {
					return isEquivalent(currentState, item);
				});

				// We are assuming a wrapping input
				let nextState = input[(i+1) % input.length];
				let dictionaryIndexOfNextState = this.dictionary.indexOf(nextState);

				// increment the amount of times this transition has occurred
				transitionMatrix[indexOfCurrentState][dictionaryIndexOfNextState]++;

			}


			transitionMatrix = transitionMatrix.map( utils.normalize );

			return transitionMatrix;
		}


		getNextState(state) {
			const transitionMatrix = this.transitionMatrix;

			let indexOfCurrentState = this.combinations.findIndex( (item) => {
				return isEquivalent(state, item);
			});

			let probabilities = transitionMatrix[indexOfCurrentState];

			let nextIndex = utils.windex( probabilities );

			return this.dictionary[nextIndex];
		}

		asPattern() {
			let self = this;

			return function* asPattern(initialState) {
				self.lastState = initialState;

				while(true) {
					let nextState = self.getNextState(self.lastState);
					self.lastState = [self.lastState[self.lastState.length-1], nextState];

					yield nextState;
				}
			};
		}

	};

	export { Markov };

