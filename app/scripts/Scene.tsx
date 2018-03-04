
import { Patterns as p } from './patterns';
import Synth from './Synth';
import {ISoundPlayer} from './SoundPlayer';
import utils from './utils';

export interface ISceneConfig {
  populationSize: number,
  initialPopulation: any[],
  target: any[], // In Frequency
  timeBetweenEvents: number,
  gapBetweenEvents: number,
  melodyOscillators: ISoundPlayer[],
  chordOscillators: ISoundPlayer[],
}

export class Scene {
  notes: IterableIterator<any>;
  currentGeneration: number;
  config: ISceneConfig;

  public constructor(config: ISceneConfig) {
    this.config = config;
    this.notes = p.Pgenetic(config.initialPopulation, config.target);
    this.currentGeneration = 0;
  }

  public play() {
    const nextGen = this.notes.next().value;
    const newNotes = nextGen;

    let i = 0;
    let k = (Math.random() > 0.5) ? 0 : 1;
    this.config.chordOscillators.map((osc) => {
      const octave = Math.ceil(Math.random() * 8);
      osc.play({freq: newNotes[i]/octave, time: this.config.timeBetweenEvents, pan: ((k%2)*2) - 1, vol: 0.2}); i++; k++;
    });

    this.playMelody(newNotes, this.currentGeneration);

    console.log('GENETIC GENERATION: ', this.currentGeneration, nextGen);
    window.setTimeout(() => {
      this.currentGeneration++;
      this.play();
    }, (this.config.timeBetweenEvents + this.config.gapBetweenEvents) * 1000);
  }


  private playMelody( notes, generation ) {
    const newNotes = notes;

    // Taken from the sequence of pitches in "Forever in Blue Jeans" by Neil Diamond
    const idealMelody = utils.mapToDomain([0,4,2,0,7,4,2,7,7,4,2,2,4,4,2,0], newNotes);
    const randomShiftAmount = Math.floor(Math.random() * (idealMelody.length))
    const initialState = [...idealMelody.slice(randomShiftAmount), ...idealMelody.slice(0, -(idealMelody.length-randomShiftAmount))]
    const markovMelody = p.Pmarkov(idealMelody, 1, initialState.slice(-2) );

    let i = 0;
    const playNextNote = (generation) => {
      const octave = Math.ceil(Math.random() * 3) + Math.ceil(Math.random() * 3 ) + 3;
      const nextNote = markovMelody.next().value;

      if(nextNote !== undefined && utils.flipCoin(0.75) ) { // Sometimes probablities are zero, so we'll get an undefined next state
        this.config.melodyOscillators[i % this.config.melodyOscillators.length].play({freq: nextNote/octave, time: 3 + (Math.random() * 14), pan: 0, vol: 0.05});
      }
      i++;


      window.setTimeout(() => {
        if(generation === this.currentGeneration) {
          playNextNote(generation);
        }
      }, ((Math.random() * 2) + 0.5) * 1000);
    }

    playNextNote(generation);

  }

}

