// Basic curve from https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode
const makeDistortionCurve = amount => {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};


import {ISoundPlayer, IPlayOptions} from './SoundPlayer';
import { flipCoin } from './utils';

interface ISynthOptions {
  waveformType?: string,
}

class Synth implements ISoundPlayer {
  oscillator: any;
  context: AudioContext;
  gainNode;
  waveShaper;
  panner: StereoPannerNode;
  config: ISynthOptions;

  constructor(context, config?: ISynthOptions) {
    this.context = context;

    this.config = config ? config : {};
  }

  private init() {
    this.oscillator = this.context.createOscillator();
    //this.config.waveformType && (this.oscillator.type = this.config.waveformType);

    this.gainNode = this.context.createGain();
    this.panner = this.context.createStereoPanner();
    this.waveShaper = this.context.createWaveShaper();
    this.waveShaper.curve = makeDistortionCurve(800);
    this.waveShaper.oversample = '4x';

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.panner);
    this.panner.connect(this.waveShaper);
    this.waveShaper.connect(this.context.destination);

    this.oscillator.type = this.config.waveformType ? this.config.waveformType : flipCoin() ? 'triangle' : 'sine';
    this.gainNode.gain.value = 0;
  }

  public play(opt: IPlayOptions) {
    const {freq=220, time=1, pan=0, vol=1} = opt;
    this.init();

    let gain = 0.01;
    this.oscillator.frequency.value = freq;

    opt.distortion && (this.waveShaper.curve = makeDistortionCurve(opt.distortion) );
    // some stupid basic psychoacoustic shaping
    if(freq > 200) gain = gain*0.12;
    if(freq > 6000) gain = gain*0.08;
    this.panner.pan.value = pan;
    this.oscillator.start(0);
    this.gainNode.gain.setTargetAtTime(vol * gain * (0.55 - (Math.random() * 0.01)), this.context.currentTime, time * 0.85 );


    var self = this;
    window.setTimeout(function() {
      self.stop(time * 0.25);
    }, (time - (time*0.25)) * 1000);

    return this;
  }

  public stop(time) {
    this.gainNode.gain.setTargetAtTime(0, this.context.currentTime, time*0.9 );
    this.oscillator.stop(this.context.currentTime + ( time * 4 ));

    return this;
  }

}

export default Synth;
