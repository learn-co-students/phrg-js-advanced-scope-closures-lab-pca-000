function produceDrivingRange(blockRange) {
  return function myRange(startBlock, endBlock) {
    let distance = Math.abs(parseInt(endBlock) - parseInt(startBlock))
    console.log(distance);
    if (blockRange >= distance) {
      return `within range by ${blockRange - distance}`
    }
    else {
      return `${Math.abs(blockRange - distance)} blocks out of range`
    }
  };
}

function produceTipCalculator(tipPercent) {
  return function calculateTipForReceipt(price) {
    return price * tipPercent
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
