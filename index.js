function produceDrivingRange(blockRange) {
  return function(a, b) {
    const start = parseInt(a, 10);
    const end = parseInt(b, 10);
    const distance = end - start;
    const range = Math.abs(blockRange - distance);
    if (distance < blockRange) {
      return `within range by ${range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
    return total * percent;
  }
}

function createDriver() {
  let driverID = 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverID;
    }
  }
}
