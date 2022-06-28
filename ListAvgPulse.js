function ListAvgPulse(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Pulsse: ");
    }
    let avgPulse = Math.round(sum/(arrayParams.length)*10)/10;
    return avgPulse
  }

module.exports = ListAvgPulse