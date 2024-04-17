function sortGiftCode(code){
  //TODO 
  let alphabetMap = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  };

  code = code.split('');

  for(let i = 0; i < code.length; i++) {
    for(let j = 0; j < code.length; j++) {
      if(i == j) {
        continue;
      }

      if(alphabetMap[code[i]] < alphabetMap[code[j]]) {
        let tmp = code[j];
        code[j] = code[i];
        code[i] = tmp;
      }
    }
  }

  return code.join('');
}

console.log(sortGiftCode('abcdef'));
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'));