function ListAvgVB(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Avg Vacation Balance: ");
    }
    let avgVB = Math.round(sum/(arrayParams.length)*10)/10;
    return avgVB
  }

module.exports = ListAvgVB