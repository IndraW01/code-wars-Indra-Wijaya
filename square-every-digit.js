function squareDigits(num) {
  return parseInt(num.toString().split('').map((val) => {
    return Math.pow(parseInt(val), 2);
  }).join(''));

}

console.log(squareDigits(9119))