function ListAvgAge(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Age: ");
    }
    let avgAge = Math.round(sum/(arrayParams.length)*10)/10;
    return avgAge
  }

module.exports = ListAvgAge