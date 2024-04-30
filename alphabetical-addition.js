function addLetters(...letters) {
  // your code here
  if (letters.length < 1) return 'z';

  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };

  let sum = 0;

  for (let i = 0; i < letters.length; i++) {
    if (sum > 26) {
      sum = sum - 26;
    }
    sum += obj[letters[i]];
  }

  if (sum > 26) {
    sum = sum - 26;
  }

  const result = Object.keys(obj).find(key => obj[key] == sum);

  return result;
}

console.log(addLetters('a', 'b', 'c'));
console.log(addLetters('a', 'b'));
console.log(addLetters('y', 'c', 'b'));
console.log(addLetters());

console.log(addLetters("i", "n", "a", "t", "f", "x", "x", "l", "h", "u"));