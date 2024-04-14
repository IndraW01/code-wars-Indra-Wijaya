function reverseNumber(n) {
  const array = n.toString().split('');
  const arrayRev = [];

  if(array.length == 1) return n;
  
  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] == '0') {
      continue;
    }

    if(array[i] == '-') {
      arrayRev.unshift(array[i]);
    } else {
      arrayRev.push(parseInt(array[i]));
    }


  }

  return parseInt(arrayRev.join(''));
}

console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(1000));