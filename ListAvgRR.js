function ListAvgRR(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Respiration Rate: ");
    }
    let avgRR = sum/(arrayParams.length);
    return avgRR
  }

module.exports = ListAvgRR