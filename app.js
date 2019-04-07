const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
// Routes
const withdrawRouter = require('./routes/withdrawRouter')
// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }))
// create application/json parser
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/api/v1/withdraw', withdrawRouter)
app.get('/', (req, res, next) => {
  res.render('index')
})
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error', {
    title: err.message,
    message: err.status + ' ' + err.message
  })
})

module.exports = app
