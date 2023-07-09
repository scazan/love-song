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
  // waveformType?: string,
  waveformType?: OscillatorType,
}
interface ISynthNodes {
  oscillator: any;
  gainNode: any;
  waveShaper: any;
  panner: StereoPannerNode;
}

class Synth implements ISoundPlayer {
  private synthNodes: ISynthNodes;
  private config: ISynthOptions;
  private context: AudioContext;

  constructor(context, config?: ISynthOptions) {
    this.context = context;
    this.config = config ? config : {};
  }

  private init() {
    const context = this.context;

    const oscillator = context.createOscillator();
    this.config.waveformType && (oscillator.type = this.config.waveformType);

    const gainNode = context.createGain();
    const panner = context.createStereoPanner();
    const waveShaper = context.createWaveShaper();
    waveShaper.curve = makeDistortionCurve(800);
    waveShaper.oversample = '4x';

    oscillator.connect(gainNode);
    gainNode.connect(panner);
    panner.connect(waveShaper);
    waveShaper.connect(context.destination);

    oscillator.type = this.config.waveformType ? this.config.waveformType : flipCoin() ? 'triangle' : 'sine';
    gainNode.gain.value = 0;

    this.synthNodes = {
      oscillator,
      gainNode,
      waveShaper,
      panner,
    };
  }

  public play(opt: IPlayOptions) {
    const {freq=220, time=1, pan=0, vol=1} = opt;
    this.init();

    const {
      oscillator,
      gainNode,
      waveShaper,
      panner,
    } = this.synthNodes;


    let gain = 0.01;
    oscillator.frequency.value = freq;

    opt.distortion && (waveShaper.curve = makeDistortionCurve(opt.distortion) );
    // some stupid basic psychoacoustic shaping
    if(freq > 200) gain = gain*0.12;
    if(freq > 6000) gain = gain*0.08;
    panner.pan.value = pan;
    // oscillator.start(0);
    const targetGain = vol * gain * (0.55 - (Math.random() * 0.01));
    const attack = time * 0.85;
    // gainNode.gain.setTargetAtTime(targetGain, this.context.currentTime, attack);

    const duration = (time - (time*0.25)) * 1000
    const decay = time * 0.25;
    var self = this;
    window.setTimeout(function() {
      // self.stop(decay);
    }, duration);


    console.log(targetGain, duration, freq, attack, decay, pan);
    // @ts-ignore
    window.socket.emit('message', `/synth ${ targetGain } ${ duration } ${ freq } ${ attack } ${ decay } ${ pan }`)
    return this;
  }

  public stop(time) {
    // const context = this.context;
    // const {
      // oscillator,
      // gainNode,
    // } = this.synthNodes;

    // gainNode.gain.setTargetAtTime(0, context.currentTime, time*0.9 );
    // oscillator.stop(context.currentTime + ( time * 4 ));

    return this;
  }
}

export default Synth;
