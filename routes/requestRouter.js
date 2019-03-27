var express = require('express');
var router = express.Router();
const findResult = require('../helper/findResult');
const availableNotes = [100, 50, 20, 10];

router.get('/', (req, res, next) => {
  try {
    const resultArr = findResult(availableNotes, req.query.amount);
    res.render('result', {
      result: resultArr
    });
  } catch (exception) {
    res.render('error', {
      exception
    });
  }
});

router.get('/:amount', (req, res, next) => {
  try {
    const resultArr = findResult(availableNotes, req.params.amount);
    res.render('result', {
      result: resultArr
    });
  } catch (exception) {
    res.render('error', {
      exception
    });
  }
});

router.post('/', (req, res, next) => {
  try {
    const resultArr = findResult(availableNotes, req.body.amount);
    res.render('result', {
      result: resultArr
    });
  } catch (exception) {
    res.render('error', {
      exception
    });
  }
});
module.exports = router;

