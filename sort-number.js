function solution(nums) {

  if (!Array.isArray(nums)) return [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }

      if (nums[i] < nums[j]) {
        let tmp = nums[j];
        nums[j] = nums[i];
        nums[i] = tmp;
      }
    }
  }

  return nums;

}

console.log(solution([]));
console.log(solution(null));
console.log(solution([1, 2, 3, 10, 5]));