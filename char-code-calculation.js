function calc(x) {

  x = x.split('').map(val => {
    return val.charCodeAt(0);
  }).join('');

  let x2 = x.split('').map(val => val == 7 ? 1 : val).join('');

  return x.split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) - x2.split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
}

console.log(calc('ABC'))
console.log(calc('abcdef'));
console.log(calc('aaaaaddddr'));

// console.log('B'.charCodeAt(0))

// charCodeAt