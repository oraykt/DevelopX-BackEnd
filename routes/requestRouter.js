/* eslint-disable no-throw-literal */
const express = require('express')
const router = express.Router()
const checkUserInput = require('../utils/checkUserInput')
const findResultArray = require('../services/findResultArray')

const availableNotes = [100, 50, 20, 10]

router.get('/:amount', (req, res, next) => {
  try {
    console.log('test')
    let userInput = checkUserInput(req.params.amount)
    if (userInput % availableNotes[3] === 0) {
      const resultArray = []
      findResultArray(availableNotes, userInput, resultArray)
      res.json({ resultArray })
    } else {
      throw 'NoteUnavailableException'
    }
  } catch (exception) {
    res.json({ exception })
  }
})

router.get('/', (req, res, next) => {
  try {
    let userInput = checkUserInput(req.query.amount)
    if (userInput % availableNotes[3] === 0) {
      const resultArray = []
      findResultArray(availableNotes, userInput, resultArray)
      res.json({ resultArray })
    } else {
      throw 'NoteUnavailableException'
    }
  } catch (exception) {
    res.json({ exception })
  }
})

router.post('/', (req, res, next) => {
  try {
    let userInput = checkUserInput(req.body.amount)
    if (userInput % availableNotes[3] === 0) {
      const resultArray = []
      findResultArray(availableNotes, userInput.resultArray)
      res.json({ resultArray })
    } else {
      throw 'NoteUnavailableException'
    }
  } catch (exception) {
    res.json({ exception })
  }
})
module.exports = router
