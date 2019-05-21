
const WNS = require('../../../src/wns').WNS;

const playButton = document.querySelector('.play') as HTMLElement;
playButton.onclick = () => {
  WNS({
    samplePath: "samples/",
  });
};
