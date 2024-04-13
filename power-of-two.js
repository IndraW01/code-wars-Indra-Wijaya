// function isPowerOfTwo(n){
//   //.. should return true or false ..
//   if(n == 1) return true;
//   if(n == 0) return false;
//   return n % 2 == 0 ? true : false;
// }

function isPowerOfTwo(n) {
  if (n <= 0) {
      return false;
  }
  while (n % 2 === 0) {
      n /= 2;
  }
  return n === 1;
}

console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(4096));
// console.log(isPowerOfTwo(333));