import {Howl, Howler} from 'howler';
import utils from './utils';
import {ISoundPlayer, IPlayOptions, ISample} from './SoundPlayer';


interface IPlayer {
  player: Howl,
  baseFreq: number,
}

class MultiSampler implements ISoundPlayer {
  players: IPlayer[];
  context: AudioContext;
  gainNode;
  panner: StereoPannerNode;

  constructor(context, opt: { samples: ISample[] } ) {
    this.context = context;
    this.players = opt.samples.map( sampleConfig => ({player: new Howl({src: sampleConfig.files}), baseFreq: sampleConfig.freq}) );
  }

  public play(opt: IPlayOptions) {
    const {freq=220, time=1, pan=0, vol=1} = opt;

    let gain = 1;
    const samplePlayer = this.findClosestSamplePlayer( freq );
    const currentlyPlayingSampleID = samplePlayer.player.play();
    samplePlayer.player.loop( true, currentlyPlayingSampleID );
    samplePlayer.player.rate( utils.getRateFromFrequencies( freq, samplePlayer.baseFreq ), currentlyPlayingSampleID );
    // some stupid basic pyschoacoustic shaping
    if(freq > 200) gain = gain*0.2;
    //this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
    samplePlayer.player.fade( 0, gain * vol, 200, currentlyPlayingSampleID );
    samplePlayer.player.stereo( pan, currentlyPlayingSampleID );
    //this.panner.pan.value = pan;
    //this.gainNode.gain.setTargetAtTime(vol * gain * (0.55 - (Math.random() * 0.01)), this.context.currentTime, time * 0.85 );


    window.setTimeout(function() {
      samplePlayer.player.fade( gain * vol, 0, 200, currentlyPlayingSampleID );
      this.stop(time, samplePlayer, currentlyPlayingSampleID );
    }.bind(this), ( time * 1000 ) + 200); // adding a 100 ms buffer to avoid any issues

    return this;
  }

  public stop(time, samplePlayer, currentlyPlayingSampleID) {
    window.setTimeout(function() {
      samplePlayer.player.stop();
    }.bind(this), 300); // adding a 100 ms buffer to avoid any issues

    return this;
  }

  private findClosestSamplePlayer( freq:number ): IPlayer {
    // Can only get the closest frequency in the set of Players' frequencies so get that frequency, then filter the players
    const closestPlayerFrequency = utils.getClosestMember(freq, this.players.map( player => player.baseFreq) );
    console.log("searching: ", freq, "found: ", closestPlayerFrequency);
    return utils.findInCollection( this.players, member => member === closestPlayerFrequency );
  }
}

export default MultiSampler;
