const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    
    if (message === undefined || key === undefined) {
      throw new Error
    }

    throw new CustomError('Not implemented');

  } 

  decrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error
    }

    throw new CustomError('Not implemented');
    
  }

}

module.exports = VigenereCipheringMachine;
