const express = require('express')
const router = express.Router()
const withdrawService = require('../services/withdraw')

const availableNotes = [100, 50, 20, 10]

// TODO userInput name

router.get('/', (req, res, next) => {
  res.render('withdraw')
})

router.post('/withFront', (req, res, next) => {
  try {
    res.render('result',
      withdrawService.withdraw(req.body.amount, availableNotes)
    )
  } catch (exception) {
    res.render('exception', {
      exception
    })
  }
})

router.post('/', (req, res, next) => {
  try {
    res.status(200).json(withdrawService.withdraw(req.body.amount, availableNotes))
  } catch (exception) {
    res.status(400).json(exception)
  }
})

module.exports = router
