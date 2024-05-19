function outed(meet, boss) {
  let score = 0;
  let length = 0;

  for (const key in meet) {
    length += 1;

    if (key == boss) {
      score += meet[key] * 2;
    } else {
      score += meet[key];
    }
  }

  return score / length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'))
console.log(outed({ "tim": 5, "jim": 7, "randy": 4, "sandy": 8, "andy": 0, "katie": 9, "laura": 2, "saajid": 3, "alex": 2, "john": 5, "mr": 4 }, "jim"))
// console.log(outed({ "tim": 0, "jim": 0, "randy": 5, "sandy": 4, "andy": 6, "katie": 3, "laura": 5, "saajid": 7, "alex": 8, "john": 6, "mr": 3 }, "katie"))
console.log(outed({ 'tim': 1, 'jim': 3, 'randy': 9, 'sandy': 6, 'andy': 7, 'katie': 6, 'laura': 9, 'saajid': 9, 'alex': 9, 'john': 9, 'mr': 8 }, 'katie'));