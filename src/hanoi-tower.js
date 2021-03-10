const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsNumber = 2 ** disksNumber - 1
  const secondsNumber = Math.floor(turnsNumber / turnsSpeed * 3600)
  return {turns: turnsNumber, seconds: secondsNumber}
};
