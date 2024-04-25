

var palindromeChainLength = function(n) {
  
  let step = 0;
  let repeat = true;
  let left;
  let right;

  while(repeat) {
    left = split(n);
    right = split(n).reverse();

    if(left.join('') == right.join('')) {
      break;
      // return false;
    } else {
      step += 1;
      n = parseInt(left.join('')) + parseInt(right.join(''));
    }
  }

  return step;
};

function split(s) {
  return s.toString().split('').map((val) => parseInt(val))
}


console.log(palindromeChainLength(1));
console.log(palindromeChainLength(88));
console.log(palindromeChainLength(87));
console.log(palindromeChainLength(89));
console.log(palindromeChainLength(10));