const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error
  }

  const newArr = Array.from(arr)

  for (let i = 0; i < newArr.length; i++)
  
    if (newArr[i] === '--discard-next') {
      newArr[i] = undefined
      if (i < (newArr.length - 1)) {
        newArr[i + 1] = undefined
      }
    } else if (newArr[i] === '--discard-prev') {
      newArr[i] = undefined
      if (i != 0) {
        newArr[i - 1] = undefined
      }
    } else if (newArr[i] === '--double-next') {
      if (i < (newArr.length - 1)) {
        newArr[i] = newArr[i + 1]
      } else {
        newArr[i] = undefined
      }      
    } else if (newArr[i] === '--double-prev') {
      if  (i != 0) {
        newArr[i] = newArr[i - 1]
      } else {
        newArr[i] = undefined
      }
    }

  return newArr.filter(el => el !== undefined)
};