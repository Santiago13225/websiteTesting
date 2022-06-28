function ListAvgBP(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Pressure: ");
    }
    let avgBP = Math.round(sum/(arrayParams.length)*10)/10;
    return avgBP
  }

module.exports = ListAvgBP