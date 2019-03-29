/* eslint-disable no-throw-literal */
const express = require('express')
const router = express.Router()
const mainFunction = require('../services/mainFunction')

const availableNotes = [100, 50, 20, 10]

router.get('/:amount', (req, res, next) => {
  mainFunction(req.params.amount, availableNotes, res)
})

router.get('/', (req, res, next) => {
  mainFunction(req.query.amount, availableNotes, res)
})

router.post('/', (req, res, next) => {
  mainFunction(req.body.amount, availableNotes, res)
})
module.exports = router
