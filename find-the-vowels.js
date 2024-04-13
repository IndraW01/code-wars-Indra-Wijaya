function vowelIndices(word){
  //your code here
  const find = [];
  const vokal = 'aeiouy';

  word = word.toLowerCase();

  for(let i = 0; i < word.length; i++) {
    if(vokal.includes(word[i])) {
      find.push(i + 1);
    }
  }

  return find;
}

console.log(vowelIndices('mmm'));
console.log(vowelIndices('apple'));