const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let depth = 1
    let currentDepth = 1

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        currentDepth = this.calculateDepth(arr[i])
        currentDepth += 1
        if (depth < currentDepth) {
          depth = currentDepth
        }
      } 
    }
    return depth
  }
  
};