function foldTo(distance) {
  if (distance <= -1) return -1;

  let ketebalanAwal = 0.0001;
  let jumlahLipatan = 0;

  while (true) {
    jumlahLipatan += 1;
    ketebalanAwal += ketebalanAwal;

    if (ketebalanAwal >= distance) {
      break;
    }
  }

  return jumlahLipatan;
}

console.log(foldTo(384000000))