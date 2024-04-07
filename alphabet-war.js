function alphabetWar(fight) {
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  };

  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  };

  let leftWin = 0;
  let rightWin = 0;

  for (let i = 0; i < fight.length; i++) {
    if (right[fight[i]]) {
      rightWin += right[fight[i]];
    } else if (left[fight[i]]) {
      leftWin += left[fight[i]];
    } else {
      continue;
    }
  }

  return (rightWin == leftWin ? "Let's fight again!" : (leftWin > rightWin ? 'Left side wins!' : 'Right side wins!'));
}

console.log(alphabetWar('zup'));
// console.log(alphabetWar('z'));
// console.log(alphabetWar('zdqmwpbs'));
// console.log(alphabetWar("zzzzs"));
// console.log(alphabetWar("wwwwww"));