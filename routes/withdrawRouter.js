const express = require('express')
const router = express.Router()
const withdrawService = require('../services/withdraw')

router.get('/', (req, res, next) => {
  // TODO `DailyLimit` could be defined here
  res.render('withdraw')
})

router.post('/withFront', (req, res, next) => {
  try {
    res.render('result', {
      result: withdrawService.withdraw(req.body.amount)
    })
  } catch (exception) {
    res.render('exception', {
      exception
    })
  }
})

router.post('/', (req, res, next) => {
  try {
    res.status(200).json({
      result: withdrawService.withdraw(req.body.amount)
    })
  } catch (exception) {
    res.status(400).json({
      exception
    })
  }
})

module.exports = router
