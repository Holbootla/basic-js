const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  return members
  .filter(el => (typeof el === 'string' && el.length !== 0))
  .map(el => el.trim().toUpperCase()[0])
  .sort()
  .join('')
};
