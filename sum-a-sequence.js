const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  if (begin > end) {
    return 0;
  }

  let sum = 0;
  // Mulai dari nilai mulai, lalu tambahkan dengan langkah hingga mencapai atau melewati nilai akhir
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};

console.log(sequenceSum(2, 2, 2));
console.log(sequenceSum(2, 6, 2));