function nbYear(p0, percent, aug, p) {

  let awalTahun = p0;
  let jumlahTahun = 0;

  while (awalTahun < p) {

    awalTahun = Math.floor(awalTahun + (percent / 100) * awalTahun + aug);
    jumlahTahun += 1;

  }

  return jumlahTahun;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000))
console.log(nbYear(1500000, 0.25, 1000, 2000000))
console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1000, 2.0, 50, 1214))