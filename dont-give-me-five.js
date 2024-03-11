function dontGiveMeFive(start, end) {
  let result = 0;
  for (let i = start; i <= end; i++) {
    let string = i.toString().split('');
    if (string.includes('5')) {
      continue;
    }

    result += 1;
  }

  return result;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));