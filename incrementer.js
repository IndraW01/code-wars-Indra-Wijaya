function incrementer(nums) {
  // code goes here
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] + (i + 1)) >= 10) {
      arr.push(parseInt((nums[i] + (i + 1)).toString()[(nums[i] + (i + 1)).toString().length - 1]))
    } else {
      arr.push(nums[i] + (i + 1));
    }
  }

  return arr;
}

// console.log(incrementer([1, 2, 3]));
console.log(incrementer([3, 6, 9, 8, 9]));