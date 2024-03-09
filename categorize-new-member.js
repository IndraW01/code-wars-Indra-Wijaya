function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    if ((age >= 55) && (handicap > 7)) {
      return 'Senior'
    }
    return 'Open';
  });
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));