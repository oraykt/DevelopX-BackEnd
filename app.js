const express = require('express');
const findMultiple = require('./helper/findMultiple');
const app = express();

const availableNodes = [100, 50, 20, 10];

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    next();
})

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/request', (req, res, next) => {
    try {
        let userInput = req.query.amount;
        const resultArr = [];
        if (!userInput) {
            res.render('result', { resultArr });
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
        res.render('result', { resultArr });
    } catch (exception) {
        res.render('result', { exception });
    }
});

app.listen(3000, () => {
    console.log('App is listening 3000 of port');
});