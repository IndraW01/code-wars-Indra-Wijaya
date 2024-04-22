function solve(arr) {
  let find = false;
  const array = [];

  for(let i = arr.length - 1; i >= 0; i--) {
    for(let j = arr.length - 1; j >= 0; j--) {
      if(i == j) {
        continue;
      }

      if(arr[i] == arr[j]) {
        find = true;
      } else {
        find = true;
      }
    }

    if(find) {
      if(!array.includes(arr[i])) {
        array.push(arr[i]);
      }
      find = false;
    }
  }
  return array.reverse();
}

console.log(solve([3,4,4,3,6,3]));
console.log(solve([1,2,1,2,1,2,3]));