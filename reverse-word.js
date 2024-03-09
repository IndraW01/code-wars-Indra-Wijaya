function reverseWords(str) {
  // Go for it
  const arrayRev = str.split(' ').map(val => {
    let reverse = '';
    for (let i = val.length - 1; i >= 0; i--) {
      reverse += val[i];
    }

    return reverse;
  });


  return arrayRev.join(' ');
}

console.log(reverseWords("This is an example!"));
