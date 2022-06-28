function ListAvgTemp(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Temp: ");
    }
    let avgTemp = Math.round(sum/(arrayParams.length)*100)/100;
    return avgTemp
  }

module.exports = ListAvgTemp