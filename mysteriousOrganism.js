// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, dna) => {
  return {
    _specimenNum: number,
    _dna: dna,

    mutate() {
      let length = Math.floor(Math.random()*this._dna.length)
      let originalBase = this._dna[length];
      let newBase = returnRandBase();
      while(newBase === originalBase){
        newBase = returnRandBase();
      }
      this._dna[length] = newBase;
    },

    compareDNA(obj) {
      let initial = 0;
      for (let i =0; i <this._dna.length; i++){
        if (this._dna[i] === obj._dna[i]) {
          initial++;
        }
      }
      initial = Math.floor((initial/this._dna.length) * 100);

      console.log(`Specimen ${this._specimenNum} and specimen ${obj._specimenNum} have ${initial}% in common`);
    },

    willLikelySurvive() {
      let count = 0; 
      for (let i = 0; i<this._dna.length; i++) {
        if (this._dna[i] === 'C' || this._dna[i] === 'G') {
          count++;
        }
      }
      count = Math.floor((count/this._dna.length)*100);
      if (count > 60) {
        return true;
      }else {
        return false;
      }
    },

    toString() {
      if(this.willLikelySurvive() === true) {
        return `Specimen ${this._specimenNum} has a high chance of survival.`;
      }else {
        return `Specimen ${this._specimenNum} does not have a high chance of survival.`
      }
    },
  }
}

const generateGroup = () => {
  let group = [];
  let i = 1;
  let p = pAequorFactory(i, mockUpStrand());
  while(i<=30) {
    p = pAequorFactory(i, mockUpStrand());
      if(p.willLikelySurvive()=== true) {
        group.push(p);
      i++
      }
  }
  return group;
}
// const ex1 = pAequorFactory(1, mockUpStrand());
// const ex2 = pAequorFactory(2, mockUpStrand());
// const ex3 = pAequorFactory(3, mockUpStrand());
// const ex4 = pAequorFactory(4, mockUpStrand());
// const ex5 = pAequorFactory(5, mockUpStrand());
// const ex6 = pAequorFactory(6, mockUpStrand());
// const ex7 = pAequorFactory(7, mockUpStrand());
// const ex8 = pAequorFactory(8, mockUpStrand());
// const ex9 = pAequorFactory(9, mockUpStrand());
// const e10 = pAequorFactory(10, mockUpStrand());

const group = generateGroup();
console.log(group[6].toString());

group[0].compareDNA(group[2]);







