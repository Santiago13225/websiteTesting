function ListAvgVB(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Avg Vacation Balance: ");
    }
    let avgVB = sum/(arrayParams.length);
    return avgVB
  }

module.exports = ListAvgVB