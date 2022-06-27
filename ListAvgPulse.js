function ListAvgPulse(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Pulsse: ");
    }
    let avgPulse = sum/(arrayParams.length);
    return avgPulse
  }

module.exports = ListAvgPulse