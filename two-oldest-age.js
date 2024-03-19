// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  for (let i = 0; i < ages.length; i++) {
    for (let j = 0; j < ages.length; j++) {
      if (i == j) {
        continue;
      }

      if (ages[i] < ages[j]) {
        let tmp = ages[j];
        ages[j] = ages[i];
        ages[i] = tmp;
      }
    }
  }
  return [ages[ages.length - 2], ages[ages.length - 1]];
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));