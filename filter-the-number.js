var filterString = function(value) {
  //Complete this function :)
  return parseInt(value.split('').filter((val) => parseInt(val) || val == 0).map(val => parseInt(val)).join(''));
}

// console.log(filterString("aa1bb2cc3dd"));
console.log(filterString('8v37k063nm80z9898x'));