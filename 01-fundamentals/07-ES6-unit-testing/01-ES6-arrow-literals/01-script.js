const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

for (let index1 = 0; index1 < oddsAndEvens.length; index1 += 1) {
  for (let index2 = 0; index2 < oddsAndEvens.length; index2 += 1) {
    if (oddsAndEvens[index2] > oddsAndEvens[index2 + 1]) {
      let bigger = oddsAndEvens[index2];
      oddsAndEvens[index2] = oddsAndEvens[index2 + 1]
      oddsAndEvens[index2 + 1] = bigger
    }
  }
}

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

const oddsAndEvens2 = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens2.sort(function(a, b){return a-b})} se encontram ordenados de forma crescente!`);
