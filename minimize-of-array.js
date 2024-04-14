function minSum(arr) {
  // Mengurutkan array secara menurun
  arr.sort((a, b) => b - a);

  let total = 0;
  const n = arr.length;

  // Mengambil pasangan bilangan terbesar dan mengalikannya
  for (let i = 0; i < Math.floor(n / 2); i++) {
      total += arr[i] * arr[n - 1 - i];
  }

  return total;
}

console.log(minSum([12,6,10,26,3,24]));