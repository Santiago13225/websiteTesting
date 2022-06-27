function ListAvgTemp(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Temp: ");
    }
    let avgTemp = sum/(arrayParams.length);
    return avgTemp
  }

module.exports = ListAvgTemp