class Block {

  constructor(data) {
    this.data = data;
  }

  getWidth() {
    return this.data[0];
  }

  getLength() {
    return this.data[1];
  }

  getHeight() {
    return this.data[2];
  }

  getVolume() {
    return this.data[0] * this.data[1] * this.data[2]
  }

  getSurfaceArea() {
    const width = this.data[0];
    const length = this.data[1];
    const height = this.data[2];
    return 2 * (width * length + length * height + width * height);
  }

}


const block = new Block([2, 4, 6]);

console.log(block.getSurfaceArea());