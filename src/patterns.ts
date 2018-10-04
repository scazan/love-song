/*
 * Basic Patterns implementation
 */

const Markov = require("markovn").default;
import { Genetic } from "./Genetic";

export const Pattern = (pattern) => [() => pattern.next().value];

export const Pseq = function* Pseq(values: Array<any>, repetitions: number){
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
};

export const Prand = function* Prand(values: Array<any>, repetitions: number){

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
};

export const Pmarkov = function Pmarkov(seed: any[], order: number, initialState: any[]) {
  const markovChain = new Markov(seed, order);

  return markovChain.asPattern(initialState);
};

export const Pgenetic = function* Pgenetic(inputPopulation: number[][], goal: number[]) {
  let genetic: Genetic = new Genetic(inputPopulation, goal);

  let lastState: number[] = goal;

  while(true) {
    let nextState: any = genetic.getNextState(lastState);

    lastState = [lastState[lastState.length-1], nextState];

    yield nextState;
  }
};

