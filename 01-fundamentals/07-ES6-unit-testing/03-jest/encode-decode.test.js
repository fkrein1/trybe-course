function encode(string) {
  let newString = ""
  for(let index = 0; index < string.length; index +=1) {
    if(string[index] === "a"){
      newString += "1"
    } else if(string[index] === "e"){
      newString += "2"
    } else if(string[index] === "i"){
      newString += "3"
    } else if(string[index] === "o"){
      newString += "4"
    } else if(string[index] === "u"){
      newString += "5"
    } else{
      newString += string[index]
    }
  }
  return newString
}

function decode(string) {
  let newString = ""
  for(let index = 0; index < string.length; index +=1){
    if(string[index] == 1){
      newString += "a"
    } else if(string[index] == "2"){
      newString += "e"
    } else if(string[index] == "3"){
      newString += "i"
    } else if(string[index] == "4"){
      newString += "o"
    } else if(string[index] == 5){
      newString += "u"
    } else{
      newString += string[index]
    }
  }  
  return newString
}

describe('enconde and decode functions', () => {
  it ('is a functions', () => {
    expect(typeof decode === 'function' && typeof encode === 'function').toBe(true);
  });

  it ('check encode of aeiou', () => { 
    expect(encode('aeiou')).toBe('12345');
  });

  it ('check decode of 12345', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it ('check length of string return', () => {
    const randomString = 'dakm32n42dmadsmas'
    expect(decode(randomString).length && encode(randomString).length).toBe(randomString.length);
  });

  it ('check decode of 06789 and encode of bcdfghijk', () => {
    expect(decode('06789')).toBe('06789');
  });

  it ('encode of bcdfghijk', () => {
    expect(encode('bcdfghjk')).toBe('bcdfghjk');
  });
});
