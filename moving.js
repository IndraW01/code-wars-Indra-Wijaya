function moveZeros(arr) {
  let zero = [];
  let number = [];

  for (const a of arr) {
    if(a === 0) {
      zero.push(a);
    } else {
      number.push(a);
    }
  }

  const newArray = number.concat(zero);

  return newArray;
}

moveZeros([1,2,0,1,0,1,0,3,0,1]);