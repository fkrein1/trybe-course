function sumAndMultiply(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
      return reject('Informe apenas números');
    const result = (num1 + num2) * num3;
    if (result <= 50) return reject('Valor muito baixo');
    return resolve(result);
  });
}

async function main(num1, num2, num3) {
  try {
    const result = await sumAndMultiply(num1, num2, num3)
    console.log(result)
  } catch(err){
    console.log(err)
  }
}

main(5,5,30)