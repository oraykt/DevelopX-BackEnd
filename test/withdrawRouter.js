/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../app')

chai.use(chaiHttp)

describe('POST /withdraw body: { amount: \'\' }', () => {
  it('It should return Empty Array', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: ''
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(0)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 0 }', () => {
  it('It should return Empty Array', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 0
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(0)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 10 }', () => {
  it('It should return `Result:[10]`', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 10
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(1)
        res.body.result[0].should.be.eql(10)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 20 }', () => {
  it('It should return `Result:[20]`', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 20
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(1)
        res.body.result[0].should.be.eql(20)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 30 }', () => {
  it('It should return `Result:[20, 10]`', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 30
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(2)
        res.body.result[0].should.be.eql(20)
        res.body.result[1].should.be.eql(10)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 40 }', () => {
  it('It should return `Result:[20, 20]`', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 40
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(2)
        res.body.result[0].should.be.eql(20)
        res.body.result[1].should.be.eql(20)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 50 }', () => {
  it('It should return `Result:[50]`', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 50
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(1)
        res.body.result[0].should.be.eql(50)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 80 }', () => {
  it('It should return `Result:[50, 20, 10]`', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 80
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(3)
        res.body.result[0].should.be.eql(50)
        res.body.result[1].should.be.eql(20)
        res.body.result[2].should.be.eql(10)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 100 }', () => {
  it('It should return `Result:[100]`', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 100
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(1)
        res.body.result[0].should.be.eql(100)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 180 }', () => {
  it('It should return `Result:[100, 50, 20, 10]`', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 180
      })
      .end((_err, res) => {
        res.should.have.status(200)
        res.should.an('Object')
        res.body.should.have.property('result')
        res.body.should.have.property('result').an('array')
        res.body.result.length.should.be.eql(4)
        res.body.result[0].should.be.eql(100)
        res.body.result[1].should.be.eql(50)
        res.body.result[2].should.be.eql(20)
        res.body.result[3].should.be.eql(10)
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 1 }', () => {
  it('It should throw `NoteUnavailableException` with statusCode: 400', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 1
      })
      .end((_err, res) => {
        res.should.have.status(400)
        res.should.an('Object')
        res.body.should.have.property('exception')
        res.body.exception.should.an('Object')
        res.body.exception.should.have.property('error')
        res.body.exception.error.should.be.eql('NoteUnavailableException')
        res.body.exception.should.have.property('error_msg')
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 9 }', () => {
  it('It should throw `NoteUnavailableException` with statusCode: 400', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 9
      })
      .end((_err, res) => {
        res.should.have.status(400)
        res.should.an('Object')
        res.body.should.have.property('exception')
        res.body.exception.should.an('Object')
        res.body.exception.should.have.property('error')
        res.body.exception.error.should.be.eql('NoteUnavailableException')
        res.body.exception.should.have.property('error_msg')
        done()
      })
  })
})

describe('POST /withdraw body: { amount: 125 }', () => {
  it('It should throw `NoteUnavailableException` with statusCode: 400', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: 125
      })
      .end((_err, res) => {
        res.should.have.status(400)
        res.should.an('Object')
        res.body.should.have.property('exception')
        res.body.exception.should.an('Object')
        res.body.exception.should.have.property('error')
        res.body.exception.error.should.be.eql('NoteUnavailableException')
        res.body.exception.should.have.property('error_msg')
        done()
      })
  })
})

describe('POST /withdraw body: { amount: -50 }', () => {
  it('It should throw `InvalidArgumentException` with statusCode: 400', (done) => {
    chai.request(server)
      .post('/withdraw')
      .send({
        amount: -50
      })
      .end((_err, res) => {
        res.should.have.status(400)
        res.should.an('Object')
        res.body.should.have.property('exception')
        res.body.exception.should.an('Object')
        res.body.exception.should.have.property('error')
        res.body.exception.error.should.be.eql('InvalidArgumentException')
        res.body.exception.should.have.property('error_msg')
        done()
      })
  })
})
