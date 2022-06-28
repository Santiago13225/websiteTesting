function ListAvgHeight(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Avg Height: ");
    }
    let avgHeight = Math.round(sum/(arrayParams.length)*10)/10;
    return avgHeight
  }

module.exports = ListAvgHeight