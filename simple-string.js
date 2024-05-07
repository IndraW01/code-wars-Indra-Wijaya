function solve(s) {
  //..
  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const sum = [0, 0, 0, 0];

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i]))) {
      sum[2] += 1;
    } else if (!alphabetArray.includes(s[i].toLowerCase())) {

      sum[3] += 1;
    } else if (s[i] === s[i].toUpperCase()) {
      sum[0] += 1;
    } else if (s[i] === s[i].toLowerCase()) {
      sum[1] += 1;
    }
  }

  return sum;
}

console.log(solve('bgA5<1d-tOwUZTS8yQ'));
// console.log(solve('Codewars@codewars123.com'))