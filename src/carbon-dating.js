const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(parseInt(sampleActivity)) || parseFloat(sampleActivity) > MODERN_ACTIVITY || parseInt(sampleActivity) <= 0 || typeof sampleActivity !== 'string') {
    return false
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (Math.LN2 / HALF_LIFE_PERIOD))
}