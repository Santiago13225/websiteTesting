function ListAvgWeight(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Weight: ");
    }
    let avgWeight = sum/(arrayParams.length);
    return avgWeight
  }

module.exports = ListAvgWeight