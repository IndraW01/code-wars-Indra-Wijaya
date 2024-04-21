function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              // Tukar elemen jika elemen sebelumnya lebih besar
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  return arr;
}

// Contoh penggunaan
let angka = [2, 3, 1, 4, 5];
console.log("Contoh output:", bubbleSort(angka)); // Output: [1, 2, 3, 4, 5]
