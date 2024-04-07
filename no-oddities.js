function noOdds(values) {
  // Return all non-odd values

  return values.filter(val => val % 2 == 0);
}

console.log(noOdds([0, 1]));