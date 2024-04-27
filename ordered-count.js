const orderedCount = function (text) {
  // Implement me!
  const array = [];

  let s;
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    s = text[i];

    if (array.filter(val => val[0] == s).length > 0) {
      continue;
    }

    for (let j = 0; j < text.length; j++) {
      if (s == text[j]) {
        count += 1;
      } else {
        continue;
      }
    }

    array.push([s, count]);
    count = 0;
  }

  return array;
}

console.log(orderedCount("abracadabra"));