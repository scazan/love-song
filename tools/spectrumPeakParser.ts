import {ISpectrumConfig} from '../app/scripts/Scene';

const fs = require('fs');
const slayer = require('slayer');

const getPeakFrequencies = async (data: number[][]) => {
  const peaks = await slayer({
    minPeakHeight: -70,
  })
    .y(item => item[1])
    .fromArray(data)

  return peaks;
};

// Need to actually get peaks as opposed to most prominent frequencies
const parseAudacityFile = data =>
  data
    .split('\r')
    .map( freqDB =>
      freqDB.split('\t')
        .map( elem => parseFloat(elem))
    )
    //.filter( freqDB => (freqDB[0] < 10000) && (freqDB[0] >= 60) )

const getMostProminentFrequencies = data =>
  data
    .sort( (a, b) => b[1] - a[1] )
    .splice(0,16)
    .map( tuple => tuple[0] );


const spectrumDataPath = './tools/spectrumData';

const audioObjects:ISpectrumConfig[] = fs.readdirSync(spectrumDataPath).map(file => {
  const data = parseAudacityFile( fs.readFileSync(spectrumDataPath + '/' + file, 'utf8') );
  const peaks = await getPeakFrequencies(data);
  const spectrum = getMostProminentFrequencies( peaks.map(item => [item.x, item.y]) );
  const audioFile = file.replace('.txt', '.mp3');

  return {
    audioFile,
    spectrum
  };
});

fs.writeFileSync('./app/scripts/spectralData.json', JSON.stringify(audioObjects));

console.log('Spectral data written');
