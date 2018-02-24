
import { Patterns as p } from "./patterns";
import Sound from "./Sound";
import utils from "./utils";

// HELPERS
const createIntegerSequence = (start: number, length: number): number[] => {
  let i: number = start;
  let seqArray = Array(length).fill(0);

  seqArray = seqArray.map( () => i++);

  return seqArray;
};

const createRandomIntegerSequence8 = (): number[] => createIntegerSequence(Math.floor(Math.random() * 10), 8);
// END HELPERS

//let notes = p.Pmarkov([6,0.1, 5, 3, 9, 0.2, 9, 5, 0.2, 0.1, 0.3], 2, [6, 0.1]);
let initialPopulation = Array(80).fill( Array(8).fill(0) );
let target = Array(8).fill(0);


let i=0;
target = [193, 423, 1668, 2333, 2665, 3078, 4038, 6319];  ;
//target = target.map((freq) => utils.ftom(freq) );
//target = target.map(() => {i+1; return i;});
initialPopulation = initialPopulation.map( item => item.map( item2 => {return (Math.random() * (target[target.length-1] - target[0])) + (target[0]-20)}) );
const timeBetweenEvents = 20;
const gapBetweenEvents = 25;
//initialPopulation = initialPopulation.map( () => createRandomIntegerSequence8() );
console.log(initialPopulation);

let notes = p.Pgenetic(initialPopulation, target);

let currentGeneration = 0;
let printNote = () => {
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
    printNote();
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
  const idealMelody = mapToDomain([1,2,3,4,5,4,3,2,1], newNotes);
  const randomShiftAmount = Math.floor(Math.random() * (newNotes.length))
  const initialState = [...newNotes.slice(randomShiftAmount), ...newNotes.slice(0, -(newNotes.length-randomShiftAmount))]
  const markovMelody = p.Pmarkov(idealMelody, 1, initialState.slice(-2) );

  let i = 0;
  const playNextNote = (generation) => {
    const octave = Math.ceil(Math.random() * 8);
    const nextNote = markovMelody.next().value;
    melodyOscillators[i % melodyOscillators.length].play({freq: nextNote/octave, time: 1, pan: 0});
    i++;

    console.log('nextNote', nextNote, generation);

    window.setTimeout(function() {
      if(generation === currentGeneration) {
        playNextNote(generation);
      }
    }, ((Math.random() * 2) + 0.5) * 1000);
  }

  playNextNote(generation);

};


const context = new AudioContext();
const chordOscillators = Array(8).fill(0).map(() => new Sound(context));
const melodyOscillators = Array(8).fill(0).map(() => new Sound(context));

printNote();
//playMelody(notes)
