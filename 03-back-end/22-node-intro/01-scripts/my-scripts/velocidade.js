const readline = require('readline-sync');

const distance = readline.questionInt('Distância em metros: ');
const time = readline.questionInt('Distância em segundos: ');

const velocity = (distance, time) => {
  const kmPerHour = (distance / time) * 3.6;
  console.log(`${kmPerHour} km/h`);
};

module.exports = velocity(distance, time);
