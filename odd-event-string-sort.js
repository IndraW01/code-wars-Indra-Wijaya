function sortMyString(S) {
  // your code here
  let odd = '';
  let even = '';

  for(let i = 0; i < S.length; i++) {
    if(i % 2 == 0) {
      even += S[i];
    } else {
      odd += S[i];
    }
  }

  return `${even} ${odd}`;
}

console.log(sortMyString('CodeWars'));