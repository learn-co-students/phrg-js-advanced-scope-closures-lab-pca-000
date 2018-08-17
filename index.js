function produceDrivingRange(blockRange) {
  return function(beginning, ending) {

    let begin = parseInt(beginning.slice(0,2))
    let end = parseInt(ending)
    let distance = (end - begin)
    let difference = blockRange - distance

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(cost) {
  return function(num){
    return (num * cost)
  }
}
