function rowWeights(array){
  //your code here
  const arr = [0, 0];

  for(let i = 0; i < array.length; i++) {
    if(i % 2 == 0) {
      arr[0] = arr[0] + array[i];
    } else {
      arr[1] = arr[1] + array[i];
    }
  }

  return arr;
}

console.log(rowWeights([29,83,67,53,19,28,96]))