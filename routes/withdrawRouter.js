const express = require('express')
const router = express.Router()
const withdrawService = require('../services/withdraw')

const availableNotes = [100, 50, 20, 10]

// TODO userInput name

router.get('/', (req, res, next) => {
  res.render('withdraw')
})

router.post('/withFront', (req, res, next) => {
  withdrawService.withdraw(req.body.amount, availableNotes, res)
})

router.post('/', (req, res, next) => {
  withdrawService.withdraw(req.body.amount, availableNotes, res)
})

module.exports = router
