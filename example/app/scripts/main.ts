import '../styles/main.scss';

const WNS = require('../../../src/wns').WNS;

const playButton = document.querySelector('.play') as HTMLButtonElement;
playButton.onclick = () => {
  WNS({
    samplePath: "samples/",
  });

  playButton.innerText = 'playing';
  document.body.classList.add('active');
};
