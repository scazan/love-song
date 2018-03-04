
import { Patterns as p } from './patterns';
import Synth from './Synth';
import MultiSampler from './MultiSampler';
import utils from './utils';

// HELPERS
const createIntegerSequence = (start: number, length: number): number[] => {
  let i: number = start;
  let seqArray = Array(length).fill(0);

  seqArray = seqArray.map( () => i++);

  return seqArray;
};

const populationSize = 16;
//const createRandomIntegerSequence24 = (): number[] => createIntegerSequence(Math.floor(Math.random() * 10), populationSize);
// END HELPERS

//let notes = p.Pmarkov([6,0.1, 5, 3, 9, 0.2, 9, 5, 0.2, 0.1, 0.3], 2, [6, 0.1]);
let initialPopulation = Array(80).fill( Array(populationSize).fill(0) );
let target = Array(populationSize).fill(0);


let i=0;
target = [193, 423, 1668, 2333, 2665, 3078, 4038, 6319, 193+1, 423+1, 1668+1, 2333+1, 2665+1, 3078+1, 4038+1, 6319+1 ]; // in frequency
//target = target.map((freq) => utils.ftom(freq) );
//target = target.map(() => {i+1; return i;});
initialPopulation = initialPopulation.map( item => item.map( item2 => {return (Math.random() * (target[target.length-1] - target[0])) + (target[0]-20)}) );
const timeBetweenEvents = 20;
const gapBetweenEvents = 25;
//initialPopulation = initialPopulation.map( () => createRandomIntegerSequence8() );
console.log(initialPopulation);

let notes = p.Pgenetic(initialPopulation, target);

let currentGeneration = 0;
let playSection = () => {
    const nextGen = notes.next().value;
    //const newNotes = nextGen.map(note => utils.mtof( Math.ceil(utils.ftom(note)) ) );
    const newNotes = nextGen;

  let i = 0;
  let k = (Math.random() > 0.5) ? 0 : 1;
  chordOscillators.map((osc) => {
    const octave = Math.ceil(Math.random() * 8);
    osc.play({freq: newNotes[i]/octave, time: timeBetweenEvents, pan: ((k%2)*2) - 1, vol: 0.2}); i++; k++;
  });

  playMelody(newNotes, currentGeneration);

  console.log('GENETIC GENERATION: ', currentGeneration, nextGen);
  window.setTimeout(function() {
    currentGeneration++;
    playSection();
  }, (timeBetweenEvents + gapBetweenEvents) * 1000);
};

const mapToDomain = (set, domain) => {
  const setOffset = Math.min(...domain) - Math.min(...set);
  const domainRange = ( Math.max(...domain) - Math.min(...domain) );
  const setRange = ( Math.max(...set) - Math.min(...set) );

  return set.map( member => utils.getClosestMember( (( (member - Math.min(...set)) / setRange) * domainRange ) + setOffset, domain));
};

const playMelody = ( notes, generation ) => {
    //const nextGen = notes.next().value;
    const newNotes = notes;

  // Should be taken from the sequence of pitches in the recording
  //const idealMelody = mapToDomain([1,2,3,4,5,4,3,2], newNotes);
  const idealMelody = mapToDomain([0,4,2,0,7,4,2,7,7,4,2,2,4,4,2,0], newNotes);
  const randomShiftAmount = Math.floor(Math.random() * (idealMelody.length))
  const initialState = [...idealMelody.slice(randomShiftAmount), ...idealMelody.slice(0, -(idealMelody.length-randomShiftAmount))]
  const markovMelody = p.Pmarkov(idealMelody, 1, initialState.slice(-2) );

  let i = 0;
  const playNextNote = (generation) => {
    const octave = Math.ceil(Math.random() * 3) + Math.ceil(Math.random() * 3 ) + 3;
    const nextNote = markovMelody.next().value;
    console.log('nextNote', nextNote, generation);
    melodyOscillators[i % melodyOscillators.length].play({freq: nextNote/octave, time: 3 + (Math.random() * 14), pan: 0, vol: 0.05});
    i++;


    window.setTimeout(function() {
      if(generation === currentGeneration) {
        playNextNote(generation);
      }
    }, ((Math.random() * 2) + 0.5) * 1000);
  }

  playNextNote(generation);

};


const context = new AudioContext();
const sourceSamples = Array(1).fill(0).map(() => new MultiSampler(context, {
  samples: [
    { files: [ "samples/emptyWords.mp3" ], freq: 1 },
  ],
}));
sourceSamples[0].play({freq: 1, time: 60 * 3 * 1000, vol: 0.1});

const chordOscillators = Array(populationSize).fill(0).map(() => new Synth(context));

const multiSamplerOpts = {
  samples: [
    { files: [ "samples/pipeG.mp3" ], freq: 199 },
    { files: [ "samples/pipeD.mp3" ], freq: 306 },
    { files: [ "samples/pipeA.mp3" ], freq: 445 },
    { files: [ "samples/pipeE.mp3" ], freq: 666 },
  ],
};
const melodyOscillators = Array(populationSize).fill(0).map(() => Math.random() > 0.5 ? new MultiSampler( context, multiSamplerOpts ) : new Synth(context));

playSection();
