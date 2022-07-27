const readline = require('readline-sync');

const weigth = readline.questionFloat('What is your weight in kilos?: ');
const height = readline.questionFloat('What is your height in meters?: ');

const imc = (weigth, height) => {
  const imc = (weigth / height ** 2).toFixed(1);
  console.log(`Your IMC is: ${imc}`);
  return imc;
};

const checkIMC = (imc) => {
  if (imc < 18.5) return console.log('Under weight');
  if (imc < 24.9) return console.log('Normal weight');
  if (imc < 29.9) return console.log('Over weight');
  if (imc < 34.9) return console.log('Obesity Leve I');
  if (imc < 39.9) return console.log('Obesity Level II');
  return console.log('Obesity Level III and IV');
};

module.exports = checkIMC(imc(weigth, height));
