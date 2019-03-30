/* eslint-disable no-throw-literal */
const express = require('express')
const router = express.Router()
const withdrawService = require('../services/withdrawService')

const availableNotes = [100, 50, 20, 10]

router.get('/', (req, res, next) => {
  res.render('withdraw')
})

router.post('/', (req, res, next) => {
  withdrawService(req.body.amount, availableNotes, res)
})
module.exports = router
