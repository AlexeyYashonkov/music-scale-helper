// Scales:
// Major scales:
const majorC = 'C D E F G A B C';
const majorDb = 'Db Eb F Gb Ab Bb C';
const majorD = 'D E F# G A B C# D';
const majorEb = 'Eb F G Ab Bb C D Eb';
const majorE = 'E F# G# A B C# D# E';
const majorF = 'F G A Bb C D E F';
const majorGb = 'Gb Ab Bb Cb Db Eb F Gb';
const majorG = 'G A B C D E F# G';
const majorAb = 'Ab Bb C Db Eb F G Ab';
const majorA = 'A B C# D E F# G# A';
const majorBb = 'Bb C D Eb F G A Bb';
const majorB = 'B C# D# E F# G# A# B';
// Minor scales:
const minorC = 'C D Eb F G Ab Bb C';
const minorDb = 'Db Eb Fb Gb Ab Bb C Db';
const minorD = 'D E F G A Bb C D';
const minorEb = 'Eb F Gb Ab Bb Cb Db Eb';
const minorE = 'E F# G A B C# D# E';
const minorF = 'F G Ab Bb C Db Eb F';
const minorGb = 'Gb Ab Bb Cb Db Eb Fb Gb';
const minorG = 'G A Bb C D Eb F G';
const minorAb = 'Ab Bb Cb Db Eb Fb Gb Ab';
const minorA = 'A B C D E F G A';
const minorBb = 'Bb C Db Eb F Gb Ab Bb';
const minorB = 'B C# D E F# G A B';
// Major pentatonic:
const majorPentaC = 'C D E G A C';
const majorPentaDb = 'Db Eb F Ab Bb Db';
const majorPentaD = 'D E F# A B D';
const majorPentaEb = 'Eb F G Bb C Eb';
const majorPentaE = 'E F# G# B C# E';
const majorPentaF = 'F Ab Bb C Eb F';
const majorPentaGb = 'Gb Ab Bb Db Eb Gb';
const majorPentaG = 'G A B D E G';
const majorPentaAb = 'Ab Bb C Eb F Ab';
const majorPentaA = 'A B C# E F# A';
const majorPentaBb = 'Bb Db Eb F Ab Bb';
const majorPentaB = 'B C# D# F# G# B';
// Minor pentatonic:
const minorPentaC = 'C Eb F G Bb C';
const minorPentaDb = 'Db E Gb Ab B Db';
const minorPentaD = 'D F G A C D';
const minorPentaEb = 'Eb Gb Ab Bb Db Eb';
const minorPentaE = 'E G A B D E';
const minorPentaF = 'F Ab Bb C Eb F';
const minorPentaGb = 'Gb A B Db E Gb';
const minorPentaG = 'G Bb C D F G';
const minorPentaAb = 'Ab B Db Eb Gb Ab';
const minorPentaA = 'A C D E G A';
const minorPentaBb = 'Bb Db Eb F Ab Bb';
const minorPentaB = 'B D E F# A B';
// Blues scale:
const bluesScaleC = 'C Eb F Gb G Bb C';
const bluesScaleDb = 'Db E Gb G Ab B Db';
const bluesScaleD = 'D F G Ab A C D';
const bluesScaleEb = 'Eb Gb Ab A Bb Db Eb';
const bluesScaleE = 'E G A Bb B D E';
const bluesScaleF = 'F Ab Bb B C Eb F';
const bluesScaleGb = 'Gb A B C Db E Gb';
const bluesScaleG = 'G Bb C Db D F G';
const bluesScaleAb = 'Ab B Db D Eb Gb Ab';
const bluesScaleA = 'A C D Eb E G A';
const bluesScaleBb = 'Bb Db Eb E F Ab Bb';
const bluesScaleB = 'B D E F F# A B';
// Dorian minor scale:
const dorianMinorC = 'C D Eb F G A Bb C';
const dorianMinorDb = 'Db Eb E Gb Ab Bb B Db';
const dorianMinorD = 'D E F G A B C D';
const dorianMinorEb = 'Eb F Gb Ab Bb C Db Eb';
const dorianMinorE = 'E F# G A B C# D E';
const dorianMinorF = 'F G Ab Bb C D Eb F';
const dorianMinorGb = 'Gb Ab A B Db Eb E Gb';
const dorianMinorG = 'G A Bb C D E F G';
const dorianMinorAb = 'Ab Bb B Db Eb F Gb Ab';
const dorianMinorA = 'A B C D E F# G A';
const dorianMinorBb = 'Bb C Db Eb F G Ab Bb';
const dorianMinorB = 'B C# D E F# G# A B';
// 1-3-5-7 steps:
const septaStepsC = 'C Eb G Bb';
const septaStepsDb = 'Db E Ab B';
const septaStepsD = 'D F A C';
const septaStepsEb = 'Eb Gb Bb Db';
const septaStepsE = 'E G B D';
const septaStepsF = 'F Ab C Eb';
const septaStepsGb = 'Gb A Db E';
const septaStepsG = 'G Bb D F';
const septaStepsAb = 'Ab B Eb Gb';
const septaStepsA = 'A C E G';
const septaStepsBb = 'Bb Db F Ab';
const septaStepsB = 'B D F# A';

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

// Logic :
// Adding the corresponding scales with the obtained value from the button.
function addScales(note) {
  switch (note) {
    case 'C':
      majorScale.textContent = majorC;
      minorScale.textContent = minorC;
      majorPentatonic.textContent = majorPentaC;
      minorPentatonic.textContent = minorPentaC;
      bluesScale.textContent = bluesScaleC;
      dorianMinor.textContent = dorianMinorC;
      septimaChord.innerHTML = `${note}m7 chord:`;
      steps1357.textContent = septaStepsC;
      break;
    case 'C# / Db':
      majorScale.textContent = majorDb;
      minorScale.textContent = minorDb;
      majorPentatonic.textContent = majorPentaDb;
      minorPentatonic.textContent = minorPentaDb;
      bluesScale.textContent = bluesScaleDb;
      dorianMinor.textContent = dorianMinorDb;
      septimaChord.innerHTML = `C#m7 / Dbm7 chord:`;
      steps1357.textContent = septaStepsDb;
      break;
    case 'D':
      majorScale.textContent = majorD;
      minorScale.textContent = minorD;
      majorPentatonic.textContent = majorPentaD;
      minorPentatonic.textContent = minorPentaD;
      bluesScale.textContent = bluesScaleD;
      dorianMinor.textContent = dorianMinorD;
      septimaChord.innerHTML = `${note}m7 chord:`;
      steps1357.textContent = septaStepsD;
      break;
    case 'D# / Eb':
      majorScale.textContent = majorEb;
      minorScale.textContent = minorEb;
      majorPentatonic.textContent = majorPentaEb;
      minorPentatonic.textContent = minorPentaEb;
      bluesScale.textContent = bluesScaleEb;
      dorianMinor.textContent = dorianMinorEb;
      septimaChord.innerHTML = `D#m7 / Ebm7 chord:`;
      steps1357.textContent = septaStepsEb;
      break;
    case 'E':
      majorScale.textContent = majorE;
      minorScale.textContent = minorE;
      majorPentatonic.textContent = majorPentaE;
      minorPentatonic.textContent = minorPentaE;
      bluesScale.textContent = bluesScaleE;
      dorianMinor.textContent = dorianMinorE;
      septimaChord.innerHTML = `${note}m7 chord:`;
      steps1357.textContent = septaStepsE;
      break;
    case 'F':
      majorScale.textContent = majorF;
      minorScale.textContent = minorF;
      majorPentatonic.textContent = majorPentaF;
      minorPentatonic.textContent = minorPentaF;
      bluesScale.textContent = bluesScaleF;
      dorianMinor.textContent = dorianMinorF;
      septimaChord.innerHTML = `${note}m7 chord:`;
      steps1357.textContent = septaStepsF;
      break;
    case 'F# / Gb':
      majorScale.textContent = majorGb;
      minorScale.textContent = minorGb;
      majorPentatonic.textContent = majorPentaGb;
      minorPentatonic.textContent = minorPentaGb;
      bluesScale.textContent = bluesScaleGb;
      dorianMinor.textContent = dorianMinorGb;
      septimaChord.innerHTML = `F#m7 / Gbm7 chord:`;
      steps1357.textContent = septaStepsGb;
      break;
    case 'G':
      majorScale.textContent = majorG;
      minorScale.textContent = minorG;
      majorPentatonic.textContent = majorPentaG;
      minorPentatonic.textContent = minorPentaG;
      bluesScale.textContent = bluesScaleG;
      dorianMinor.textContent = dorianMinorG;
      septimaChord.innerHTML = `${note}m7 chord:`;
      steps1357.textContent = septaStepsG;
      break;
    case 'G# / Ab':
      majorScale.textContent = majorAb;
      minorScale.textContent = minorAb;
      majorPentatonic.textContent = majorPentaAb;
      minorPentatonic.textContent = minorPentaAb;
      bluesScale.textContent = bluesScaleAb;
      dorianMinor.textContent = dorianMinorAb;
      septimaChord.innerHTML = `G#m7 / Abm7 chord:`;
      steps1357.textContent = septaStepsAb;
      break;
    case 'A':
      majorScale.textContent = majorA;
      minorScale.textContent = minorA;
      majorPentatonic.textContent = majorPentaA;
      minorPentatonic.textContent = minorPentaA;
      bluesScale.textContent = bluesScaleA;
      dorianMinor.textContent = dorianMinorA;
      septimaChord.innerHTML = `${note}m7 chord:`;
      steps1357.textContent = septaStepsA;
      break;
    case 'A# / Bb':
      majorScale.textContent = majorBb;
      minorScale.textContent = minorBb;
      majorPentatonic.textContent = majorPentaBb;
      minorPentatonic.textContent = minorPentaBb;
      bluesScale.textContent = bluesScaleBb;
      dorianMinor.textContent = dorianMinorBb;
      septimaChord.innerHTML = `A#m7 / Bbm7 chord:`;
      steps1357.textContent = septaStepsBb;
      break;
    case 'B':
      majorScale.textContent = majorB;
      minorScale.textContent = minorB;
      majorPentatonic.textContent = majorPentaB;
      minorPentatonic.textContent = minorPentaB;
      bluesScale.textContent = bluesScaleB;
      dorianMinor.textContent = dorianMinorB;
      septimaChord.innerHTML = `${note}m7 chord:`;
      steps1357.textContent = septaStepsB;
      break;
  }
}

// Getting the value from the button for the corresponding scales.
allBtns.forEach((btn) => {
  btn.addEventListener('click', (el) => {
    btnValue = el.target.innerHTML;
    console.log(btnValue);
    addScales(btnValue);
  });
});



