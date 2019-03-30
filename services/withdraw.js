const checkUserInput = require('../utils/checkUserInput')

const findResultArray = (availableNotes, userInput, resultArray) => {
  availableNotes.forEach((value, index) => {
    const division = Math.floor(userInput / value)
    userInput -= value * division
    for (let i = 0; i < division; i++) {
      resultArray.push(value)
    }
  })
}

const withdrawService = {
  withdraw: (userInput, availableNotes) => {
    try {
      checkUserInput(userInput, availableNotes[3])
      const resultArray = []
      findResultArray(availableNotes, userInput, resultArray)
      return { result: resultArray }
    } catch (exception) {
      throw exception
    }
  }
}
module.exports = withdrawService
