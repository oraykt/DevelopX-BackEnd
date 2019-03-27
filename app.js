const express = require('expess');

const app = express();


app.use((req, res, next) => {
    /*
    fs.appendFile("developX.log", "Data" + "\n", (err)=>{
        if(err){
            console.log(error);
        }
    });
    */
    console.log(req);
    next();
});

app.get('/request:amount', (req, res) => {
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