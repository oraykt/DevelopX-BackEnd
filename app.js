const express = require('express');
const findMultiple = require('./helper/findMultiple');
const app = express();

const availableNodes = [100, 50, 20, 10];

app.use((req, res, next) => {
    next();
});

app.get('/request', (req, res, next) => {
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
        res.json({ result: resultArr });
    } catch (exception) {
        res.json({ exception });
    }
});

app.listen(3000, () => {
    console.log('App is listening 3000 of port');
});