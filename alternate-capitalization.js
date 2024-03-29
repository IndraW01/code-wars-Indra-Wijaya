function capitalize(s) {
  let alternatedA = '';
  let alternatedB = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      alternatedA += s[i].toLowerCase();
      alternatedB += s[i].toUpperCase();
    } else {
      alternatedA += s[i].toUpperCase();
      alternatedB += s[i].toLowerCase();
    }
  }

  return [alternatedB, alternatedA];
};

console.log(capitalize('abcdef'));