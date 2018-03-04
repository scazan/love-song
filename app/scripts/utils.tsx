
export default {
  mtof: (note: number): number => Math.pow(2, (note)/12) * 440,

  ftom: (note: number): number => Math.sqrt(note/440)/12,

  choose: (array: Array<any>): any => {
    return array[Math.floor(Math.random() * array.length)];
  },

  normalize: (coll: Array<number>): Array<number> => {
    let collSum = coll.reduce((a,b) => a+b);
    return collSum > 0 ? coll.map( (weight) => weight / collSum) : coll.map(() => 0);
  },

  windex: (weights: Array<number>): number => {
    let sumOfWeights = weights.reduce( (prev, curr) => prev + curr);

    let randNum = Math.random() * sumOfWeights;
    let weightSum = 0;

    for (let i = 0; i < weights.length; i++) {
      weightSum += weights[i];
      weightSum = +weightSum.toFixed(2);

      if (randNum <= weightSum) {
        return i;
      }
    }
  },

  getRateFromFrequencies: (freq, baseFreq): number => {
    return freq/baseFreq;
  },

  getClosestMember: (subject, set) => {
    return set.reduce( (accum, member) => {
      const prevDistance = accum - subject;
      const currentDistance = member - subject;

      return Math.abs( currentDistance ) < Math.abs( prevDistance ) ? member : accum;
    }, set[0]);
  },

  findInCollection: (collection, predicateFunction) => {
    return collection.reduce( (accum, member) => predicateFunction(member) ? member : accum );
  },

  mapToDomain: (set, domain) => {
    const setOffset = Math.min(...domain) - Math.min(...set);
    const domainRange = ( Math.max(...domain) - Math.min(...domain) );
    const setRange = ( Math.max(...set) - Math.min(...set) );

    return set.map( member => this.getClosestMember( (( (member - Math.min(...set)) / setRange) * domainRange ) + setOffset, domain));
  },

  flipCoin: (probability=0.5) => (Math.random() > probability) ? 0 : 1,
};
