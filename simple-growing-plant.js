function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //coding and coding..

  if (upSpeed > desiredHeight) return 1;

  let sum = upSpeed;
  let day = 1;

  while (true) {
    sum += upSpeed - downSpeed;


    if (sum >= desiredHeight) {
      day += 1;
      break;
    } else {
      day += 1;
    }

  }

  return day;

}
// console.log(growingPlant(100, 10, 910));
// console.log(growingPlant(51, 50, 186));
// console.log(growingPlant(34, 27, 299));
console.log(growingPlant(50, 34, 754))
// console.log(growingPlant(10, 9, 4));