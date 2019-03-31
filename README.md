# DevelopX-Express Cash Machine Challange

[![Build Status](https://travis-ci.org/oraykt/DevelopX-Express.svg?branch=master)](https://travis-ci.org/oraykt/DevelopX-Express)
> https://oraykt-developx.herokuapp.com/


## The Problem
Develop a solution that simulate the delivery of notes when a client does a withdraw in a cash machine.

The basic requirements are the follow:

Develop a solution that simulate the delivery of notes when a client does a withdraw in a cash machine.
The basic requirements are the follow:
- Always deliver the lowest number of possible notes;
- It’s possible to get the amount requested with available notes;
- The client balance is infinite;
- Amount of notes is infinite;
- Available notes $ 100,00; $ 50,00; $ 20,00 e $ 10,00


### Example:

- Entry: 30.00
  Result: [20.00, 10.00]
- Entry: 80.00
  Result: [50.00, 20.00, 10.00]
- Entry: 125.00
  Result: throw NoteUnavailableException
- Entry: -130.00
  Result: throw InvalidArgumentException
- Entry: NULL
  Result: [Empty Set]


### The Solution:

- [withdrawRouter](https://github.com/oraykt/DevelopX-Express/blob/master/routes/withdrawRouter.js) CashMachine Withdraw Service Router
- [withdrawService](https://github.com/oraykt/DevelopX-Express/blob/master/services/withdraw.js) is Business Function
- [checkUserInput](https://github.com/oraykt/DevelopX-Express/blob/master/utils/checkUserInput.js) is Logical Calculation
- [Views](https://github.com/oraykt/DevelopX-Express/tree/master/views) The interface that users use the interface
- [Test](https://github.com/oraykt/DevelopX-Express/blob/master/test/withdrawRouter.js) is the tests
- [Test Logs](https://travis-ci.org/oraykt/DevelopX-Express)

## Installation


It doesn't have private npm repo currently so we need to clone DevelopX-Express from git repo and install it locally via 

```bash
git clone git@github.com:oraykt/DevelopX-Express.git 
```
```bash
cd DevelopX-Express && npm install && npm start
```

> http://localhost:3000
