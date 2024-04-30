function tidyNumber(n) {
  //your code here
  n = n.toString().split('').map(val => parseInt(val));

  for (let i = 0; i < n.length; i++) {
    if (i + 1 == n.length) {
      break;
    }

    if (n[i] > n[i + 1]) {
      return false;
    }
  }

  return true;

}

console.log(tidyNumber(12));
console.log(tidyNumber(102));