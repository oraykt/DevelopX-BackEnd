var express = require('express');
var router = express.Router();
const findMultiple = require('../helper/findMultiple');

const availableNodes = [100, 50, 20, 10];
router.get('/', (req, res, next) => {
  try {
    let userInput = req.query.amount;
    const resultArr = [];
    if (!userInput) {
      res.json({ result: resultArr });
    }
    if (userInput < 0) throw "InvalidArgumentException";
    availableNodes.forEach((node, index) => {
      let tempDiv = findMultiple(index, userInput, availableNodes);
      if (tempDiv) {
        userInput -= tempDiv * node;
        do {
          resultArr.push(node);
          tempDiv--;
        } while (tempDiv !== 0)
      }
    });
    res.render('result', {
      result: resultArr
    });
  } catch (exception) {
    res.json({ exception });
  }
});

router.post('/', (req, res, next) => {
  try {
    let userInput = req.body.amount;
    const resultArr = [];
    if (!userInput) {
      res.json({ result: resultArr });
    }
    if (userInput < 0) throw "InvalidArgumentException";
    availableNodes.forEach((node, index) => {
      let tempDiv = findMultiple(index, userInput, availableNodes);
      if (tempDiv) {
        userInput -= tempDiv * node;
        do {
          resultArr.push(node);
          tempDiv--;
        } while (tempDiv !== 0)
      }
    });
    // res.json({ result: resultArr });
    res.render('result', {
      result: resultArr
    });
  } catch (exception) {
    res.json({ exception });
  }
});
module.exports = router;

