function ListAvgRR(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Respiration Rate: ");
    }
    let avgRR = Math.round(sum/(arrayParams.length)*10)/10;
    return avgRR
  }

module.exports = ListAvgRR