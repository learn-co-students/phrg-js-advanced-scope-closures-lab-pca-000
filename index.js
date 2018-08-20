function produceDrivingRange(blockRange) {
  return function(startBlock, finishBlock) {
    let start = parseInt(startBlock)
    let finish = parseInt(finishBlock)
    let distance = Math.abs(finish - start)
    let difference = blockRange - distance

    if ( difference > 0 ) {
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(priceOfRide) {
    return (tipPercentage * priceOfRide)
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
