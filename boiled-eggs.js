function cookingTime(numEggs) {
  // Hitung berapa banyak putaran yang dibutuhkan untuk merebus semua telur
  const rounds = Math.ceil(numEggs / 8);

  // Hitung waktu total yang dibutuhkan dalam menit
  const totalTime = rounds * 5;

  return totalTime;
}

console.log(cookingTime(71));
console.log(cookingTime(35));