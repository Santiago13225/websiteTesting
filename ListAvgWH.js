function ListAvgWH(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Avg Hours of Work: ");
    }
    let avgWH = sum/(arrayParams.length);
    return avgWH
  }

module.exports = ListAvgWH