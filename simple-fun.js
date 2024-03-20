function reverseLetter(str) {
  //coding and coding..
  str = str.split('');
  const arr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    if (/^[a-zA-Z]*$/.test(str[i])) {
      arr.push(str[i]);
    }
  }

  return arr.join('');
}

console.log(reverseLetter('ultr53o?n'));