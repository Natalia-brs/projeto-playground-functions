// Desafio 1
function compareTrue(primeiro, segundo) {
  if (primeiro === true && segundo === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
    let calc = (base * height) / 2;
  return calc;
}


// Desafio 3
function splitSentence(string) {
  let sentence = string.split(' ');
  return sentence;
}


// Desafio 4
function concatName(array) {
  let recebe = '';
  let first = array[0];
  let last = array [array.length -1];
  recebe = last  + ',' + ' ' +  first;
  return recebe;
}


// Desafio 5
function footballPoints(wins, ties) {
 let winsPoints = wins * 3;
 let tiesPoints=  ties * 1;
 let totalPoints = winsPoints + tiesPoints;
 return totalPoints;
}


// Desafio 6
function highestCount(arrayRepete) {
  let repeatNumber = Math.max.apply (null, arrayRepete);
  let count =0;
  for (let index = 0; index < arrayRepete.length; index += 1) {
    if (arrayRepete[index] === repeatNumber) {
        count+= 1;
  };
  }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
   let pos1 = Math.abs (mouse - cat1);
   let pos2 = Math.abs (mouse - cat2);
   if (pos1 > pos2) {
     return 'cat2';
   }
   else if ( pos2 > pos1) {
    return 'cat1';
   }
   else {
    return 'os gatos trombam e o rato foge';
   }
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
