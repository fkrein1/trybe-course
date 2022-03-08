const hydrate = (string) => {
  let water = 0
  let numberString = "123456789"
  for (let index1 = 0; index1 < string.length; index1 +=1){
    for (let index2 = 0; index2 < numberString.length; index2 +=1){
      if (string[index1] == numberString[index2]){
        water += parseInt(string[index1])
      }
    }
  }
  if (water === 1){
    return water + " copo de água"
  } else{
    return water + " copos de água"
  }
}

module.exports = hydrate