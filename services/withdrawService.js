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
const withdrawService = (userInput, availableNotes, res) => {
  try {
    checkUserInput(userInput, availableNotes[3])
    const resultArray = []
    findResultArray(availableNotes, userInput, resultArray)
    // TODO calculate amount
    /*
     * Result:
     * 100 x 3
     * 50 x 1
     * 20 x 2
     * 10 x 1
     */
    res.render('result', {
      result: resultArray
    })
  } catch (exception) {
    res.render('exception', {
      exception
    })
  }
}
module.exports = withdrawService
