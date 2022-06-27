function ListAvgBP(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Pressure: ");
    }
    let avgBP = sum/(arrayParams.length);
    return avgBP
  }

module.exports = ListAvgBP