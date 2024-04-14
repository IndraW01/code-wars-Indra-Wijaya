function partlist(arr) {
  // your code
  const lists = [];
  let part = '';
  let part2 = '';
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i; j <= i; j++) {
      part += arr[j];
      part += ' ';
    }
    for(let m = i + 1; m < arr.length; m++) {
      part2 += arr[m];
      part2 += ' ';
    }

    lists.push([part.trimEnd(), part2.trimEnd()]);
    part2 = '';
  }

  return lists;
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));