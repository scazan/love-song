
export interface ISoundPlayer {
  play(IPlayOptions): ISoundPlayer,
  stop(any?, Howl?, number?): ISoundPlayer,
}

export interface IPlayOptions {
  freq?: number,
  time?: number,
  pan?: number,
  vol?: number,
}

export interface ISample {
  files: string[],
  freq: number
}
