function solve(s) {
  let lower = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toLowerCase()) {
      lower += 1;
    }
  }

  if (lower >= s.length / 2) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}

console.log(solve('code'));
console.log(solve('CODe'));
console.log(solve('COde'));
console.log(solve('COdE'));