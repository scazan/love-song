
const context = new AudioContext();


class Sound {
	oscillator: OscillatorNode;
	context: AudioContext;
	gainNode;
	panner: StereoPannerNode;

	constructor(context) {
		this.context = context;
	}

	init() {
		this.oscillator = this.context.createOscillator();
		this.gainNode = this.context.createGain();
		this.panner = this.context.createStereoPanner();

		this.oscillator.connect(this.gainNode);
		this.gainNode.connect(this.panner);
		this.panner.connect(this.context.destination);
		
		this.oscillator.type = 'sine';
		this.gainNode.gain.value = 0;
	}

	play(freq, time, pan) {
		this.init();

		let gain = 1;
		this.oscillator.frequency.value = freq;
		if(freq > 200) gain = gain*0.12;
		//this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
		this.panner.pan.value = pan;
		console.log('pan', pan);
		this.oscillator.start(0);
		this.gainNode.gain.setTargetAtTime(gain * (0.55 - (Math.random() * 0.01)), context.currentTime, time * 0.85 );


		var self = this;
		window.setTimeout(function() {
			self.stop(time * 0.25);
		}, (time - (time*0.25)) * 1000);

	}

	stop(time) {
		this.gainNode.gain.setTargetAtTime(0, context.currentTime, time*0.9 );
		this.oscillator.stop(context.currentTime + ( time * 4 ));
	}

}

export default Sound;
