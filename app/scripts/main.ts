
import { Patterns as p } from './patterns';
import { Scene, ISceneConfig } from './Scene';
import Synth from './Synth';
import MultiSampler from './MultiSampler';
import utils from './utils';

import * as backgroundSamples from './spectralData.json';

// Setup
const populationSize = 16;
const context = new AudioContext();

const chordOscillators = Array(populationSize).fill(0).map(() => new Synth(context));

const multiSamplerOpts = {
  samples: [
    { files: [ "samples/pipeG.mp3" ], freq: 199 },
    { files: [ "samples/pipeD.mp3" ], freq: 306 },
    { files: [ "samples/pipeA.mp3" ], freq: 445 },
    { files: [ "samples/pipeE.mp3" ], freq: 666 },
  ],
};
const melodyOscillators = Array(populationSize).fill(0).map(() => utils.flipCoin() ? new MultiSampler( context, multiSamplerOpts ) : new Synth(context));

let initialPopulation = Array(80).fill( Array(populationSize).fill(0) );
const target = [193, 423, 1668, 2333, 2665, 3078, 4038, 6319, 193+1, 423+1, 1668+1, 2333+1, 2665+1, 3078+1, 4038+1, 6319+1 ]; // in frequency
const sceneConfig: ISceneConfig = {
  initialPopulation: initialPopulation.map( item => item.map( item2 => {return (Math.random() * (target[target.length-1] - target[0])) + (target[0]-20)}) ),
  populationSize: 16,
  target, // in frequency
  timeBetweenEvents: () => (Math.random() * 15) + 5,
  gapBetweenEvents: () => utils.choose([45,10]),
  melodyOscillators,
  chordOscillators,
}

// Play the background sound
const sourceSamples = Array(1).fill(0).map(() => new MultiSampler(context, {
//const sourceSamples = backgroundSamples.samples.map( sampleData => new MultiSampler(context, {
  samples: [
    { files: [ "samples/emptyWords.mp3" ], freq: 1 },
  ],
}));
sourceSamples[0].play({freq: 1, time: 60 * 3 * 1000, vol: 0.1});

// Start the scene
const sceneOne = new Scene(sceneConfig);
sceneOne.play();
