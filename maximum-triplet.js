function maxTriSum(numbers) {
  //your code here
  let duplikat = false;

  const array = [];


  for (let i = 0; i < numbers.length; i++) {
    if (array.includes(numbers[i])) {
      duplikat = true;
    }

    if (!duplikat) {
      array.push(numbers[i])
    } else {
      duplikat = false;
    }
  }

  return array.sort((a, b) => b - a).filter((val, index) => index < 3).reduce((prev, current) => prev + current, 0);
}

// console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
console.log(maxTriSum([-2, 0, 2]));