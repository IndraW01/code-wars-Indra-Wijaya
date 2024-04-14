function findLongest(array){
  let digit;
  let result;
  // code here
  for(let i = 0; i < array.length; i++) {
    if(i == 0) {
      digit = array[i].toString().length;
      result = array[i];
    } else {
      if(digit < array[i].toString().length) {
        digit = array[i].toString().length;
        result = array[i];
      }
    }
  }

  return result;
}

console.log(findLongest([1, 10, 100]));
console.log(findLongest([8, 900, 500]));