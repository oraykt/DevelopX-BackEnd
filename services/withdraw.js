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
  withdraw: (userInput, availableNotes, res) => {
    try {
      if (checkUserInput(userInput, availableNotes[3])) {
        const resultArray = []
        findResultArray(availableNotes, userInput, resultArray)
        res.render('result', {
          result: resultArray
        })
      } else {
        res.render('withdrawService')
      }
    } catch (exception) {
      res.render('exception', {
        exception
      })
    }
  }
}
module.exports = withdrawService
