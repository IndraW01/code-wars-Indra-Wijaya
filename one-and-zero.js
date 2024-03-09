const binaryArrayToNumber = arr => {
  // your code
  // let total = 0;
  let index = 0;
  let array = [];


  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[index] * 2 ** i);
    index++;
  }

  return array.reduce((prev, curr) => prev + curr);
};

console.log(binaryArrayToNumber([1, 1, 1, 1]));