function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 3 === 0 && number % 5 === 0) return resolve('FizzBuzz');
    if (number % 3 === 0) return resolve('Fizz');
    if (number % 5 === 0) return resolve('Buzz');
    return reject(number);
  });
}

async function main(number) {
  try {
    const result = await checkNumber(number);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

main(9);
main(15);
main(10);
main(4);

checkNumber(9)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
checkNumber(15)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
checkNumber(10)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
checkNumber(4)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
checkNumber('dasdada')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
