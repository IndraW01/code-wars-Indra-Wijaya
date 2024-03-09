function disemvowel(str) {

  return str.split('').filter((val) => {
    if (val.toLowerCase() !== 'a' &&
      val.toLowerCase() !== 'i' &&
      val.toLowerCase() !== 'u' &&
      val.toLowerCase() !== 'e' &&
      val.toLowerCase() !== 'o') {
      return val;
    }
  }).join('');

}

console.log(disemvowel('This website is for losers LOL!'))