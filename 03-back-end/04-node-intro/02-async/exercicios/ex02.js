function sumAndMultiply(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof num3 !== 'number'
    )
      return reject('Informe apenas números');
    const result = (num1 + num2) * num3;
    if (result <= 50) return reject('Valor muito baixo');
    return resolve(result);
  });
}

function random() {
  return Math.floor(Math.random() * 100 + 1);
}

sumAndMultiply(random(), random(), random())
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
