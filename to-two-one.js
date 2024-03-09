function longest(s1, s2) {
  const combineString = s1 + s2;
  const uniqueString = [];

  for (let i = 0; i < combineString.length; i++) {
    const char = combineString[i];

    if (!uniqueString.includes(char)) {
      uniqueString.push(char);
    }
  }

  return uniqueString.sort().join('');


}

console.log(longest("aretheyhere", "yestheyarehere"));