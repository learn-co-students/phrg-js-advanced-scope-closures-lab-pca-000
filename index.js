function produceDrivingRange(range) {
  return function(startingPoint, endingPoint) {
    let starting_int = parseInt(startingPoint.slice(0,2))
    let ending_int = parseInt(endingPoint.slice(0,2))
    let total_diff = ending_int - starting_int
    console.log(starting_int, ending_int, total_diff)
    if (total_diff > range) {
      let response = total_diff - range
      return `${response} blocks out of range`
    }
    else {
    let response = range - total_diff
    return `within range by ${response}`
  }
  }
}

function produceTipCalculator(percentage) {
  return function (totalTip) {
    return totalTip * percentage
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
