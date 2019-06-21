function produceDrivingRange(blockRange) {
  return function(start, ending) {
    let begin = parseInt(start.slice(0,2))
    let end = parseInt(ending)
    let distanceTravelled = (end - begin)
    let difference = blockRange - distanceTravelled

     if (difference > 0) {
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}
  function produceTipCalculator(percent) {
    return function(cost){
      return (cost * percent)
    }
  }
