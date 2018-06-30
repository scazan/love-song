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
import utils from './utils';

interface ISynthOptions {
  waveformType?: string,
}

const bufferSize = 4096;
const createBrownNoise = audioContext => {
    var lastOut = 0.0;
    var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
    node.onaudioprocess = function(e) {
        var output = e.outputBuffer.getChannelData(0);
        for (var i = 0; i < bufferSize; i++) {
            var white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; // (roughly) compensate for gain
        }
    }
    return node;
};

class Noise implements ISoundPlayer {
  oscillator: any;
  context: AudioContext;
  gainNode;
  waveShaper;
  panner: StereoPannerNode;
  filter;
  filter2;
  config: ISynthOptions;

  constructor(context, config?: ISynthOptions) {
    this.context = context;

    this.config = config ? config : {};
  }

  private init() {
    this.oscillator = createBrownNoise(this.context);
    //this.config.waveformType && (this.oscillator.type = this.config.waveformType);

    this.gainNode = this.context.createGain();
    this.panner = this.context.createStereoPanner();
    this.filter = this.context.createBiquadFilter();
    this.filter.type = 'peaking';
    this.filter2 = this.context.createBiquadFilter();
    this.filter2.type = 'bandpass';

    this.waveShaper = this.context.createWaveShaper();
    this.waveShaper.curve = makeDistortionCurve(80);
    this.waveShaper.oversample = '4x';

    this.oscillator.connect(this.waveShaper);
    this.waveShaper.connect(this.filter);
    this.filter.connect(this.filter2);
    this.filter2.connect(this.panner);
    this.panner.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);

    //this.oscillator.type = this.config.waveformType ? this.config.waveformType : utils.flipCoin() ? 'triangle' : 'sine';
    this.gainNode.gain.value = 0;
  }

  public play(opt: IPlayOptions) {
    const {freq=220, time=1, pan=0, vol=1} = opt;
    this.init();

    let gain = 1.0;
    //this.oscillator.frequency.value = freq;
    this.filter.frequency.value = freq;
    this.filter.Q.value = 50.901;
    this.filter.gain.value = 20;

    this.filter2.frequency.value = freq;
    this.filter2.Q.value = 15.901;
    this.filter2.gain.value = 60;

    opt.distortion && (this.waveShaper.curve = makeDistortionCurve(opt.distortion) );
    // some stupid basic pyschoacoustic shaping
    if(freq > 200) gain = gain*0.12;
    this.panner.pan.value = pan;
    this.gainNode.gain.value = 0.001;
    this.gainNode.gain.exponentialRampToValueAtTime(vol * gain, this.context.currentTime + time);


    setTimeout(this.stop.bind(this), (time+1) * 1000);

    return this;
  }

  public stop() {
    this.gainNode.gain.setTargetAtTime(0, this.context.currentTime, 0.01 );
    return this;
  }

}

export { Noise };
