const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direction = true) {
    this.direction = direction
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  encrypt(message, key) {
    
    if (message === undefined || key === undefined) {
      throw new Error
    }
 
    const inputMessage = message.toUpperCase().split('')
    const inputKey = key.toUpperCase().split('')
    let outputMessage = []
    let j = 0
    
    for (let i = 0; i < inputMessage.length; i++) {
    
      if (this.alphabet.indexOf(inputMessage[i]) !== -1) {      
        const outputIndex = Math.abs(this.alphabet.indexOf(inputMessage[i]) + this.alphabet.indexOf(inputKey[j]) >= this.alphabet.length) ?
                            Math.abs(this.alphabet.indexOf(inputMessage[i]) + this.alphabet.indexOf(inputKey[j]) - this.alphabet.length) :
                            Math.abs(this.alphabet.indexOf(inputMessage[i]) + this.alphabet.indexOf(inputKey[j]))      
        outputMessage.push(this.alphabet[outputIndex])                  
      } else {      
        outputMessage.push(inputMessage[i])
        j -=1        
      }
      
      j += 1
      
      if (j >= (inputKey.length)) {
        j = 0
      }
      
    }
    
    if (this.direction === false) {
      return outputMessage.reverse().join('')
    } else {
      return outputMessage.join('')
    } 

  } 

  decrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error
    }
 
    const inputMessage = message.toUpperCase().split('')
    const inputKey = key.toUpperCase().split('')
    let outputMessage = []
    let j = 0
    
    for (let i = 0; i < inputMessage.length; i++) {
    
      if (this.alphabet.indexOf(inputMessage[i]) !== -1) {      
        const outputIndex = Math.abs(this.alphabet.indexOf(inputMessage[i]) - this.alphabet.indexOf(inputKey[j]) < 0) ?
                            Math.abs(this.alphabet.indexOf(inputMessage[i]) - this.alphabet.indexOf(inputKey[j]) + this.alphabet.length) :
                            Math.abs(this.alphabet.indexOf(inputMessage[i]) - this.alphabet.indexOf(inputKey[j]))      
        outputMessage.push(this.alphabet[outputIndex])                  
      } else {      
        outputMessage.push(inputMessage[i])
        j -=1        
      }
      
      j += 1
      
      if (j >= (inputKey.length)) {
        j = 0
      }
      
    }
    
    if (this.direction === false) {
      return outputMessage.reverse().join('')
    } else {
      return outputMessage.join('')
    }
    
  }

}

module.exports = VigenereCipheringMachine