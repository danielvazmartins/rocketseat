const express = require('express')
const app = express()
const logger = require('morgan')
const routes = require('./routes')
const { errors } = require('celebrate')

app.use(logger('dev'))
//app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('', routes)
app.use(errors())

module.exports = app