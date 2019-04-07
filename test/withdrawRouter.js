/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../app')

chai.use(chaiHttp)

const sucessRequestArray = ['', 0, 10, 20, 30, 40, 50, 80, 100, 180]
const expectedSuccessResponseArray = [
  { result: [] },
  { result: [] },
  { result: [10] },
  { result: [20] },
  { result: [20, 10] },
  { result: [20, 20] },
  { result: [50] },
  { result: [50, 20, 10] },
  { result: [100] },
  { result: [100, 50, 20, 10] }
]
const failRequestArray = [1, 9, 125, -130, 'string', 100010]
const expectedFailResponseArray = [
  {
    exception: {
      error: 'NoteUnavailableException'
    }
  },
  {
    exception: {
      error: 'NoteUnavailableException'
    }
  },
  {
    exception: {
      error: 'NoteUnavailableException'
    }
  },
  {
    exception: {
      error: 'InvalidArgumentException'
    }
  },
  {
    exception: {
      error: 'InvalidArgumentException'
    }
  },
  {
    exception: {
      error: 'DailyLimitException'
    }
  }
]

sucessRequestArray.map((val, index) => {
  describe(`POST /api/v1/withdraw body: { amount: ${val}  }`, () => {
    it('It should return Array', (done) => {
      chai.request(server)
        .post('/api/v1/withdraw')
        .send({
          amount: val
        })
        .end((_err, res) => {
          res.should.have.status(200)
          res.should.an('Object')
          res.body.should.have.property('result')
          res.body.should.have.property('result').an('array')
          res.body.result.should.be.eql(expectedSuccessResponseArray[index].result)
          console.log('Result: ', res.body.result)
          done()
        })
    })
  })
})

failRequestArray.map((val, index) => {
  describe(`POST /api/v1/withdraw body: { amount: ${val} }`, () => {
    it('It should throw `Exception` with statusCode: 400', (done) => {
      chai.request(server)
        .post('/api/v1/withdraw')
        .send({
          amount: val
        })
        .end((_err, res) => {
          res.should.have.status(400)
          res.should.an('Object')
          res.body.should.have.property('exception')
          res.body.exception.should.an('Object')
          res.body.exception.should.have.property('error')
          res.body.exception.should.have.property('error_msg')
          res.body.exception.error.should.be.eql(expectedFailResponseArray[index].exception.error)
          console.log('Exception: ', res.body.exception.error)
          console.log('Exception Message : ', res.body.exception.error_msg)
          done()
        })
    })
  })
})
