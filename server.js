require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const priceRouter = require('./routers/price.router')
const intervalRouter = require('./routers/interval.router')
const {cryptoCron} = require('./crons/crypto-api.cron')
const db = require('./models/index')
const Interval = require('./models/intervals')(db.sequelize, db.Sequelize.DataTypes)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/price', priceRouter)
app.use('/interval', intervalRouter)

app.listen(process.env.PORT, async () => {
  console.log(`Server is wokring on port: ${process.env.PORT}`)
  await Interval.destroy({truncate: true})
  await Interval.create({interval: 1000})
  cryptoCron[0].start()
})