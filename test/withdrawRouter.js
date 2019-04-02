/* eslint-disable indent */
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../app')

chai.use(chaiHttp)

const successArray = ['', 0, 10, 20, 30, 40, 50, 80, 100, 180]
const failArray = [1, 9, 125, -130, 'string']

successArray.map((val, index) => {
  describe(`POST /withdraw body: { amount: ${val}  }`, () => {
    it('It should return Array', (done) => {
      chai.request(server)
        .post('/withdraw')
        .send({
          amount: val
        })
        .end((_err, res) => {
          res.should.have.status(200)
          res.should.an('Object')
          res.body.should.have.property('result')
          res.body.should.have.property('result').an('array')
          console.log(res.body.result)
          done()
        })
    })
  })
})

failArray.map((val, index) => {
  describe(`POST /withdraw body: { amount: ${val} }`, () => {
    it('It should throw `Exception` with statusCode: 400', (done) => {
      chai.request(server)
        .post('/withdraw')
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
          console.log(res.body.exception.error)
          console.log(res.body.exception.error_msg)
          done()
        })
    })
  })
})
