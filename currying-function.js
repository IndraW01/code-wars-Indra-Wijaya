// function multiplyAll() {
//   return function (arr) {
//     return function (n) {
//       return arr.map(val => val * n);
//     }
//   }
// }

function multiplyAll(arr) {
  return function (num) {
    return arr.map(function (element) {
      return element * num;
    });
  };
}

console.log(multiplyAll([1, 2, 3])(2));