
const checkUserInput = require('../utils/checkUserInput')
const findResultArray = require('../services/findResultArray')

module.exports = (userInput, availableNotes, res) => {
  try {
    checkUserInput(userInput, availableNotes[3])
    const resultArray = []
    findResultArray(availableNotes, userInput, resultArray)
    // TODO calculate amount
    /**
     * Result:
     * 100 x 3
     * 50 x 1
     * 20 x 2
     * 10x 1
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
