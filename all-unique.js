function hasUniqueChars(str){
  // ...
  str = str.split('');

  for(let i = 0; i < str.length; i++) {
    for(let j =0; j < str.length; j++) {
      if( i == j) {
        continue;
      }

      if(str[i] === str[j]) {
        return false;
      } else {
        continue;
      }
    }
  }

  return true;
}

console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars('abcdef'));