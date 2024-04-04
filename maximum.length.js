function mxdiflg(a1, a2) {
  // your code
  let result = 0;
  let sub = 0

  if (a1.length == 0 || a2.length == 0) return -1;

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i].length > a2[j].length) {
        sub = a1[i].length - a2[j].length;
      } else {
        sub = a2[j].length - a1[i].length;
      }

      if (sub > result) {
        result = sub;
      }
    }
  }

  return result;
}

let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(a1, a2));