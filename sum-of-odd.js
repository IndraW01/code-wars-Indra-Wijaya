function cubeOdd(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) return undefined;

  let sum = 0;
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is a number
    if (typeof arr[i] !== 'number') return undefined;

    // Cube the number and check if it's odd
    const cubed = Math.pow(arr[i], 3);
    console.log(cubed);
    if (cubed % 2 !== 0) {
      // Add to sum if odd
      sum += cubed;
    }
  }
  return sum;
}

console.log(cubeOdd([1, 2, 3, 4]));
// console.log(cubeOdd([-3, -2, 2, 3]));

// console.log(cubeOdd(["a", 12, 9, "z", 42]));