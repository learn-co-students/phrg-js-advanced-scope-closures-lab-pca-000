function produceDrivingRange(blockRange) {
  return function(start, end) {
    let numberOfBlocks = Math.abs(parseInt(start) - parseInt(end))
    let blockDifference = Math.abs(blockRange - numberOfBlocks)

    if (blockRange > numberOfBlocks) {
      return `within range by ${blockDifference}`
    } else {
      return `${blockDifference} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return (fare) => {
    return fare * tipPercent
  }
}

function createDriver() {
  let driverId = 0

  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
