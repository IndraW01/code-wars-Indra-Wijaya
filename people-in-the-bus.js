var number = function (busStops) {
  let jumlah = 0;
  let turun = 0;

  for (let i = 0; i < busStops.length; i++) {
    jumlah += busStops[i][0];
    turun += busStops[i][1];
  }

  return jumlah - turun;
}

console.log(number([[10, 0], [3, 5], [5, 8]]));
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));