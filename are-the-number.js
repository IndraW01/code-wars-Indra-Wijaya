function inAscOrder(arr) {
  // Code your algorithm here :)
  
  // Hmmm ... maybe we should try our luck out ...
  // if (Math.random() > 0.5) {
  //  return true;
  // } else {
  //  return false;
  // }

  let isTrue = true;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i + 1]) {
      isTrue = false;
      break;
    } else {
      continue;
    }
  }

  return isTrue ? true : false;
}

console.log(inAscOrder([1,2,4,7,19]));
console.log(inAscOrder([1,6,10,18,2,4,20]));