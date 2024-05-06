function balancedNum(number) {
  number = number.toString().split('').map(val => parseInt(val));

  if (parseInt(number) == NaN) return 'Not Balanced';
  if (number.length == 1 || number.length == 2) return 'Balanced';

  let kiri = 0;
  let kanan = 0;

  if (number.length % 2 == 0) {
    for (let i = 0; i < number.length; i++) {
      if (i == number.length / 2 - 1) {
        continue;
      } else if (i == number.length / 2) {
        continue;
      }

      if (i < number.length / 2 - 1) {
        kiri += number[i];
      }

      if (i > number.length / 2) {
        kanan += number[i];
      }
    }
  } else {
    for (let i = 0; i < number.length; i++) {
      if (i == Math.ceil(number.length / 2) - 1) {
        continue;
      }

      if (i < Math.ceil(number.length / 2) - 1) {
        kiri += number[i];
      }

      if (i >= Math.ceil(number.length / 2)) {
        kanan += number[i];
      }
    }
  }

  return kiri == kanan ? 'Balanced' : 'Not Balanced';


}

// console.log(balancedNum(ç));