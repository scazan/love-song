
import { isEquivalent, normalize, windex } from "./utils";

class Markov {
    dictionary: Array<number>;
    combinations: Array< Array<number> >;
    lastState: Array<number>;
    transitionMatrix: Array<Array<number>>;

  constructor(input: any[], order: number) {
    this.dictionary = [],
    this.combinations = [];

    // Set a default last state for stream behavior
    this.lastState = [];
    for(let i=0; i < order; i++) {
      this.lastState.push(input[i]);
    }

    this.transitionMatrix = this.createTransitionMatrix(input, order);
  }

  createTransitionMatrix(input, order): Array< Array<number> > {
    this.dictionary = input;

    // Compute all possible combinations of the dictionary
    this.combinations = [];
    for(let i=0; i < this.dictionary.length; i++) {
      for(let k=0; k < this.dictionary.length; k++) {
        this.combinations.push([this.dictionary[i], this.dictionary[k]]);
      }
    }

    // Setup the transitionMatrix (should be based on order)
    //TODO: This is hardcoded to 1st order. Make dynamic.
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


    transitionMatrix = transitionMatrix.map( normalize );

    return transitionMatrix;
  }


  getNextState(state: any): any {
    const transitionMatrix: Array< Array<number> > = this.transitionMatrix;

    let indexOfCurrentState: number = this.combinations.findIndex( (item) => {
      return isEquivalent(state, item);
    });

    let probabilities: Array<number> = transitionMatrix[indexOfCurrentState];

    let nextIndex: number = windex( probabilities );
    return this.dictionary[nextIndex];
  }

  asPattern() {
    let self = this;

    return function* asPattern(initialState) {
      self.lastState = initialState;

      while(true) {
        let nextState: number = self.getNextState(self.lastState);
        self.lastState = [self.lastState[self.lastState.length-1], nextState];

        yield nextState;
      }
    };
  }

};

export { Markov };

