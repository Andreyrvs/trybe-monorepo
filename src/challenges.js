// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(cutArray) {
  // seu código aqui
  return cutArray.split(' ');
}
/**
 * Consoltei a documentação para utilizar um metodo que não foi ensinado na Trybe
 * link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
 */
// Desafio 4
function concatName(theLastFirst) {
  // seu código aqui
  return `${theLastFirst[theLastFirst.length - 1]}${','} ${theLastFirst[0]}`;
}
// Desafio 5
function footballPoints(victoryPoints, tiePoints) {
  // seu código aqui
  let wins = 3;
  let ties = 1;
  if (victoryPoints <= 0 && tiePoints <= 0) {
    return 0;
  }
  return victoryPoints * wins + tiePoints * ties;
}

// Desafio 6
function highestCount(lagerInArray) {
  // seu código aqui-
  let maxnumber = lagerInArray[0];
  let count = 0;

  for (let index = 0; index < lagerInArray.length; index += 1) {
    if (lagerInArray[index] > maxnumber) {
      maxnumber = lagerInArray[index];
    }
  }
  for (let index = 0; index < lagerInArray.length; index += 1) {
    if (maxnumber === lagerInArray[index]) {
      count += 1;
    }
  }
  return count;
}
/**
 * Consultei o Repositório do Gilson.Fernades o nickname:DevJunior21
 * Referencia (https://github.com/tryber/sd-014-b-project-playground-functions/blob/9b948a8ece32f5b0ef3b594b79951f99502ca1fe/src/challenges.js)
 */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat2Diff = cat2 - mouse;
  let cat1Diff = cat1 - mouse;
  let winningCat;

  if (cat1Diff < 0) {
    cat1Diff = cat1Diff * -1;
  }
  if (cat2Diff < 0) {
    cat2Diff = cat2Diff * -1;
  }
  if (cat2Diff < cat1Diff) {
    winningCat = 'cat2';
  } else if (cat1Diff < cat2Diff) {
    winningCat = 'cat1';
  } else if (cat1Diff === cat2Diff) {
    winningCat = 'os gatos trombam e o rato foge';
  }
  return winningCat;
}
catAndMouse(1, 0, 2);

// Desafio 8
function fizzBuzz(params) {
  // seu código aqui
  let retornaArray = [];
  for (let key of params) {
    if (key % 3 === 0 && key % 5 === 0) {
      retornaArray.push('fizzBuzz');
    } else if (key % 3 === 0) {
      retornaArray.push('fizz');
    } else if (key % 5 === 0) {
      retornaArray.push('buzz');
    } else {
      retornaArray.push('bug!');
    }
  }
  return retornaArray;
}
fizzBuzz([2, 15, 7, 9, 45]);
// Desafio 9
function encode(string) {
  // seu código aqui
  // O meu /a é a letra a ser substituida
  // O meu /g está trocando todas as letras ao mesmo tempo
  // O meu , '1' é o que eu quero substituir
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');

  return string;
}

function decode(string) {
  // seu código aqui
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
};
