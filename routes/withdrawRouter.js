const express = require('express')
const router = express.Router()
const withdrawService = require('../services/withdraw')

const availableNotes = [100, 50, 20, 10]

// TODO userInput name

router.get('/', (req, res, next) => {
  console.log(req.query.amount)
  res.render('withdraw')
})

router.post('/', (req, res, next) => {
  withdrawService.withdraw(req.body.amount, availableNotes, res)
})
module.exports = router
