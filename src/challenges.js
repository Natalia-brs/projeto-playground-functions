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
function fizzBuzz(numbers) {
  let arrayFizzBuzz = [];
   for (let index = 0; index < numbers.length; index += 1) {
     if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      arrayFizzBuzz.push('fizz')
     }
     else if (numbers[index] % 5 === 0 && numbers[index] % 3 !== 0) {
      arrayFizzBuzz.push('buzz')
     }
     else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz')
     }
     else {
      arrayFizzBuzz.push('bug!')
     }
   }
  return arrayFizzBuzz
}
console.log (fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(string) {
  string = string.replace(/['a']/g, '1');
  string = string.replace(/['e']/g, '2');
  string = string.replace(/['i']/g, '3');
  string = string.replace(/['o']/g, '4');
  string = string.replace(/['u']/g, '5');
 return string;
}
console.log (encode('go trybe'))

function decode(string2) {
  string2 = string2.replace(/['1']/g, 'a');
  string2 = string2.replace(/['2']/g, 'e');
  string2 = string2.replace(/['3']/g, 'i');
  string2 = string2.replace(/['4']/g, 'o');
  string2 = string2.replace(/['5']/g, 'u');
  return string2;
}

// Desafio 10
function techList(tecnology, string) {
  if (tecnology.length === 0) {
    return 'Vazio!'
  }

  let responseArray = [];
  tecnology.sort ();
  for (let index in tecnology) {
    responseArray.push({ tech: tecnology[index], name: string})
  }

return responseArray;

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
