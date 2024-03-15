function gimme(triplet) {
  let besarOrKecil = '';
  let isTrue = false;

  for (let i = 0; i < triplet.length; i++) {
    for (let j = 0; j < triplet.length; j++) {
      if (i == j) {
        continue;
      }

      if (triplet[i] > triplet[j]) {
        if (besarOrKecil == 'kecil') {
          isTrue = true;
        } else {
          besarOrKecil = 'besar';
        }
      }

      if (triplet[i] < triplet[j]) {
        if (besarOrKecil == 'besar') {
          isTrue = true;
        } else {
          besarOrKecil = 'kecil';
        }
      }

      console.log(isTrue);

    }
    if (isTrue) {
      return i;
    } else {
      besarOrKecil = '';
    }
  }
}

// console.log(gimme([2, 3, 1]));
// console.log(gimme([5, 10, 14]));
console.log(gimme([0, 3, 1]));