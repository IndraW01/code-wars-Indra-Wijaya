function spinWords(string){
  const array = string.split(" ");

  const newString = [];

  for (const str of array) {
    if(str.length >= 5) {
      let reverse = str.split('').reverse().join('');
      newString.push(reverse);
    } else {
      newString.push(str);
    }

  }

  return newString.join(' ');
}

spinWords('This is another test');