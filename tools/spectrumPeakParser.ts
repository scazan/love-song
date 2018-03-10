import {ISpectrumConfig} from '../app/scripts/Scene';

const fs = require('fs');

interface IFreqBin {
  freq: number,
  magnitude: number,
}

const getPeakFrequencies = (data: IFreqBin[]) => {
  const peaks = [];
  let lastDirection = 'down';
  let lastBin = undefined;

  data.map( ( bin: IFreqBin, i ) => {
    let direction;
    if( lastBin ) {
      if( lastBin.magnitude < bin.magnitude ) {
        direction = 'up';
      }
      else if(lastBin.magnitude === bin.magnitude) {
        direction = lastDirection;
      }
      else {
        direction = 'down';
      }
    }

    if( direction === 'down' && lastDirection === 'up' ) {
      peaks.push(lastBin);
    }

    lastBin = bin;
    lastDirection = direction;
  });

  return peaks;
};

const parseAudacityFile = (data: string): IFreqBin[] =>
  data
    .split('\r')
    .map( freqDB =>
      freqDB.split('\t')
        .map( elem => parseFloat(elem))
    )
  .map( freqDB => ({freq: freqDB[0], magnitude: freqDB[1]}) );

const getMostProminentFrequencies = ( data: IFreqBin[] ): number[] =>
  data
    .filter( (bin: IFreqBin) => (bin.freq < 10000) && (bin.freq >= 50) )
    .sort( (a, b) => b.magnitude - a.magnitude )
    .splice(0,16)
    .map( bin => bin.freq );


const spectrumDataPath = './tools/spectrumData';

const audioObjects:ISpectrumConfig[] = fs.readdirSync(spectrumDataPath).reduce(( accum, file ) => {
  if( file.match(/.txt$/) ) {
    const data: IFreqBin[] = parseAudacityFile( fs.readFileSync(spectrumDataPath + '/' + file, 'utf8') );
    const peaks: IFreqBin[] = getPeakFrequencies(data);
    const spectrum: number[] = getMostProminentFrequencies( peaks );
    const audioFile = file.replace('.txt', '.mp3');

    return [...accum, {
      audioFile,
      spectrum
    }];
  }
  else {
      return accum;
    }
}, []);

fs.writeFileSync('./app/scripts/spectralData.json', JSON.stringify(audioObjects));

console.log('Spectral data written');
