const express = require('express');
const gcd = require('./helper/calculateGCD');
const app = express();

const availableNodes = [100, 50, 20, 10];

app.use((req, res, next) => {
    /*
    fs.appendFile("developX.log", "Data" + "\n", (err)=>{
        if(err){
            console.log(error);
        }
    });
    */
    //console.log(req);
    next();
});

app.get('/request/:amount', (req, res, next) => {
    try {
        let userInput = req.params.amount;
        console.log(userInput);
        const resultArr = [];
        if (!userInput) {
            return resultArr;
        }
        if (userInput < 0) throw "InvalidArgumentException";
        availableNodes.forEach((node, index) => {
            let tempDiv;
            if (index === availableNodes.length - 1) {
                if (userInput % node !== 0) {
                    throw "NoteUnavailableException";
                } else {
                    tempDiv = userInput / node;
                }
            } else {
                tempDiv = Math.floor(userInput / node);
            }
            if (tempDiv) {
                userInput = userInput - tempDiv * node;
                do {
                    resultArr.push(node);
                    tempDiv--;
                } while (tempDiv !== 0)
            }
        });
        console.log(resultArr);
    } catch (exception) {
        console.log(exception);
    }



    // for (let node of availableNodes) {
    //     console.log(index);
    //     let tempDiv = Math.floor(userInput / node);
    //     if (tempDiv) {
    //         userInput -= tempDiv * node;
    //         do {
    //             resultArr.push(node);
    //             tempDiv--;
    //         } while (tempDiv !== 0)
    //     } else {
    //         console.log(tempDiv);
    //     }
    // }


    res.send();
    /*
        Amount should be multiple [10] , [10,20] , [10,20,50] , [10,20,50,100]
            if(multiple()){
                return Result[];
            }else{
                return AmountUnavailableException
            }
        Amount should be above than 0
            if(above){
                check multiple(amount)
                then calculate
            }else{
                return InvalidArgumentException
            }
        If The amount is null, return Empty Set
    */
});


app.listen(3000, () => {
    console.log('App is listening 3000 of port');
});