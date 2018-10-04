import { Scene, ISceneConfig } from './Scene';
import Synth from './Synth';
import { Noise } from './Noise';
import MultiSampler from './MultiSampler';
import { IFreqBin } from '../tools/spectrumPeakParser';
import { getSequentialRandomIndex, flipCoin, choose } from './utils';

import spectralData from './spectralData.json';

export interface IWNSConfig {
  samplePath: string
};

const defaultConfig: IWNSConfig = {
  samplePath: "samples/",
};

const WNS = (config?: IWNSConfig) => {
  config = config ? {...defaultConfig, ...config} : defaultConfig;

  const backgroundSamples = <any>spectralData;

  // Setup
  const populationSize = 16;
  const context = new AudioContext();

  const chordOscillators = Array(populationSize).fill(0).map(() =>
    new Synth(context)
  );

  const multiSamplerOpts = {
    samples: [
      //{ files: [ config.samplePath + "pipeG.mp3" ], freq: 199 },
      //{ files: [ config.samplePath + "pipeD.mp3" ], freq: 306 },
      { files: [ config.samplePath + "pipeA.mp3" ], freq: 445 },
      { files: [ config.samplePath + "pipeE.mp3" ], freq: 666 },
      { files: [ config.samplePath + "piano2-324.mp3" ], freq: 324 },
      { files: [ config.samplePath + "piano3-814.mp3" ], freq: 814 },
    ],
  };
  const melodyOscillators = Array(populationSize).fill(0).map(() => flipCoin() ? new MultiSampler( context, multiSamplerOpts ) : new Synth(context));
  const sourceSamples = backgroundSamples.map( sampleData => new MultiSampler(context, {
    samples: [
      { files: [ config.samplePath + sampleData.audioFile ], freq: 1 },
    ],
  }));
  const lowDronePlayer = new MultiSampler(context, {
    samples: [
      { files: [ config.samplePath + "lowDrone.mp3" ], freq: 1 },
    ],
  });

  const bells = Array(2).fill(0).map( () =>
    new Noise(context)
  );

  const getProminentFrequencies = spectrum => spectrum
    .reduce( (accum: IFreqBin[], bin: IFreqBin) => accum[0].magnitude < bin.magnitude ? [ bin ] : accum, [{freq: 0, magnitude: -100}])
    .map( bin => bin.freq)
    .map( ( strongestFreq: number ) => Array(spectrum.length).fill(0).map( (item, i) => {
      const harmonic = strongestFreq * (i+1);
      const highestFreq = 7000;
      if (harmonic > highestFreq) {
        const divisor = Math.ceil(harmonic / highestFreq);
        return harmonic / divisor;
      }
      else {
        return harmonic;
      }
    })
    )[0];

  const playBells = () => {
    const duration = 45;
    bells.forEach( (bell, i) => {
      const randomMul = (Math.random() * 0.25) + 1;
      const freqs = [2090, 2393];
      bell.play({
        pan: (i * 2) - 1,
        freq: freqs[i] * randomMul,
        vol: 7.8,
        time: duration,
      });
    });

    setTimeout(playNewScene, (duration + 12) * 1000); // Timing is weird in the player. This results in a gap which is what I want
  };

  const playDrone = () => {
    lowDroneIsPlaying = true;
    setTimeout(() => { lowDroneIsPlaying = false; }, 330 * 1000); // Low Drone lasts 300*1000 milliseconds, add an extra 30 seconds after to decrease repetition
    lowDronePlayer.play({freq: 1, time: 300 * 1000, vol: 1.0});
  };

  let sampleIndex = 0;

  let interludeJustPlayed = false;
  let lowDroneIsPlaying = false;
  const playNewScene = () => {
    // Occasionally we want to pause for a moment to play an interlude in silence
    const playInterlude = flipCoin(0.80);
    const playLowDrone = flipCoin(0.85);

    if(playInterlude && !interludeJustPlayed) {
      interludeJustPlayed = true;
      playBells();
      setTimeout(() =>
        {
          sourceSamples.forEach( samplePlayer => samplePlayer.stop(0, samplePlayer.players[0]) );
          chordOscillators.forEach( synth => synth.stop(0) );
        },
        15 * 1000
      );

      return false;
    }

    if(playLowDrone && !lowDroneIsPlaying) {
      playDrone();
    }

    interludeJustPlayed = false;
    sampleIndex = getSequentialRandomIndex(sampleIndex, backgroundSamples.length);
    //const target = [193, 423, 1668, 2333, 2665, 3078, 4038, 6319, 193+1, 423+1, 1668+1, 2333+1, 2665+1, 3078+1, 4038+1, 6319+1 ]; // in frequency
    const backgroundSample = backgroundSamples[sampleIndex];
    const initialPopulation = Array(80).fill( backgroundSample.spectrum.map( bin => bin.freq) );
    const target = getProminentFrequencies(backgroundSample.spectrum); // Target is the overtones of the most prominent frequency in the spectrum

    const sceneConfig: ISceneConfig = {
      initialPopulation: initialPopulation.map(
        item => item.map(
          item2 => {
            return (Math.random() * (target[target.length-1] - target[0])) + (target[0]-20)
          }
        )
      ),
      populationSize: 16,
      maxGenerations: 2,
      target, // in frequency
      timeBetweenEvents: () => (Math.random() * 15) + 10,
      gapBetweenEvents: () => choose([25,10]),
      melodyOscillators,
      chordOscillators,
      onFinish: playNewScene
    };

    sourceSamples[sampleIndex].play({freq: 1, time: 60 * 3 * 1000, vol: 0.28});

    // Start the scene
    new Scene(sceneConfig).play();
  };

  // playNewScene();
  playBells();
  // playDrone();

};

export default WNS;
export { WNS };
