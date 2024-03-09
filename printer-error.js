function printerError(s) {
  const letterTrue = 'abcdefghijklm'.split('');
  let wrongColor = 0;

  for (let i = 0; i < s.length; i++) {
    if (!letterTrue.includes(s[i])) {
      wrongColor += 1;
    }
  }

  return wrongColor > 0 ? `${wrongColor}/${s.length}` : `0/${s.length}`;
}

console.log(printerError('aaabbbbhaijjjm'))
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));
console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));