const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  additionRepeatTimes = 1,
  addition = '',
  separator = '+',
  additionSeparator = '|',
  }) {
  
  const addStr = Array(additionRepeatTimes)
    .fill(String(addition))
    .join(`${additionSeparator}`)

  const mainStr = Array(repeatTimes)
    .fill(str + addStr)
    .join(`${separator}`)

  return mainStr
};