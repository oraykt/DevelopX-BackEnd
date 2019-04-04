const checkUserInput = require('../utils/checkUserInput')

// availableNotes and dailyLimit could be configurable
const availableNotes = [100, 50, 20, 10]
const dailyLimit = 100000

const findResultArray = (availableNotes, userInput, resultArray) => {
  availableNotes.forEach((value) => {
    const division = Math.floor(userInput / value)
    userInput -= value * division
    // if (division) {
    //   resultArray.push(value + ' x ' + division)
    // }
    for (let i = 0; i < division; i++) {
      resultArray.push(value)
    }
  })
}

const withdrawService = {
  withdraw: (userInput) => {
    try {
      checkUserInput(userInput, availableNotes[availableNotes.length - 1], dailyLimit)
      const resultArray = []
      findResultArray(availableNotes, userInput, resultArray)
      return resultArray
    } catch (exception) {
      throw exception
    }
  }
}
module.exports = withdrawService
