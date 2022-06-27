function ListAvgAge(arrayParams) {

    let sum = 0;
    for (let i = 0; i < arrayParams.length; i++) {
      sum += arrayParams[i];
      // console.log("Age: ");
    }
    let avgAge = sum/(arrayParams.length);
    return avgAge
  }

module.exports = ListAvgAge