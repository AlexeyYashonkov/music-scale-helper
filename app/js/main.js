// Scale calculator:
const scaleCalculator = {
  trippledChromaticScale: [
    'C',
    'C#',
    'D',
    'Eb',
    'E',
    'F',
    'F#',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
    'C',
    'C#',
    'D',
    'Eb',
    'E',
    'F',
    'F#',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
    'C',
  ],

  // Musical intervals for counting
  firstNote: '',
  fullScale: '',
  majorScaleIntervals: [0, 2, 4, 5, 7, 9, 11, 12],
  minorScaleIntervals: [0, 2, 3, 5, 7, 8, 10, 12],
  majorPentaIntervals: [0, 2, 4, 7, 9, 12],
  minorPentaIntervals: [0, 3, 5, 7, 10, 12],
  bluesScaleIntervals: [0, 3, 5, 6, 7, 10, 12],
  dorianScaleIntervals: [0, 2, 3, 5, 7, 9, 10, 12],
  septaChordIntervals: [0, 3, 7, 10],

  indexOfFirstNote: function (note) {
    let scale = this.trippledChromaticScale;
    let indexOfNote = scale.indexOf(note, 0);
    this.firstNote = note;
    this.fullScaleFromTonicNote(indexOfNote);
  },

  fullScaleFromTonicNote: function (indexOfNote) {
    let fullScaleBe = this.trippledChromaticScale.slice(
      indexOfNote,
      13 + indexOfNote
    );
    this.fullScale = fullScaleBe;
    this.calculating(
      fullScaleBe,
      this.majorScaleIntervals,
      this.minorScaleIntervals,
      this.majorPentaIntervals,
      this.minorPentaIntervals,
      this.bluesScaleIntervals,
      this.dorianScaleIntervals,
      this.septaChordIntervals
    );
  },

  calculating: function (
    fullScale,
    pattern1,
    pattern2,
    pattern3,
    pattern4,
    pattern5,
    pattern6,
    pattern7
  ) {
    let resultScale = [];

    for (let i = 0; i < 8; i++) {
      resultScale.push(fullScale[pattern1[i]]);
      majorScale.textContent = resultScale;
    }

    resultScale = [];

    for (let i = 0; i < 8; i++) {
      resultScale.push(fullScale[pattern2[i]]);
      minorScale.textContent = resultScale;
    }

    resultScale = [];

    for (let i = 0; i < 6; i++) {
      resultScale.push(fullScale[pattern3[i]]);
      majorPentatonic.textContent = resultScale;
    }

    resultScale = [];

    for (let i = 0; i < 6; i++) {
      resultScale.push(fullScale[pattern4[i]]);
      minorPentatonic.textContent = resultScale;
    }

    resultScale = [];

    for (let i = 0; i < 7; i++) {
      resultScale.push(fullScale[pattern5[i]]);
      bluesScale.textContent = resultScale;
    }

    resultScale = [];

    for (let i = 0; i < 8; i++) {
      resultScale.push(fullScale[pattern6[i]]);
      dorianMinor.textContent = resultScale;
    }

    resultScale = [];

    for (let i = 0; i < 4; i++) {
      resultScale.push(fullScale[pattern7[i]]);
      steps1357.textContent = resultScale;
    }
  },
};

// Buttons:
const allBtns = document.querySelectorAll('.btn');
let btnValue = '';

// Values of scale windows:
const allScales = document.querySelectorAll('.content__scale-descr');
const septimaChord = document.getElementById('septaChord');

const majorScale = document.getElementById('majorScale');
const minorScale = document.getElementById('minorScale');
const majorPentatonic = document.getElementById('majorPenta');
const minorPentatonic = document.getElementById('minorPenta');
const bluesScale = document.getElementById('bluesScale');
const dorianMinor = document.getElementById('dorianMinor');
const steps1357 = document.getElementById('1357Steps');

// Getting the value from the button for the corresponding scales.
allBtns.forEach((btn) => {
  btn.addEventListener('click', (el) => {
    btnValue = el.target.innerHTML;
    scaleCalculator.indexOfFirstNote(btnValue);
  });
});


