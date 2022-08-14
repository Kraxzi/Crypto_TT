require('dotenv').config()
const cron = require('node-cron');
const axios = require('axios')
const db = require('../models/index')
const Bitcoin_price = require('../models/bitcoin_price')(db.sequelize, db.Sequelize.DataTypes)
const cryptoCron = [generateCryptoCron('*/10 * * * * *')]

function generateCryptoCron(interval) {
  return cron.schedule(interval, async () => {
    let response = null
    try {
      response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin", { 
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY,
      },
      })
      const price = response.data.data["1"].quote.USD.price
      await Bitcoin_price.create({ price })
      response = null
    } catch (e) {
      console.log(e)
    } 
  }, {
    scheduled: false
  })
}

module.exports = {generateCryptoCron, cryptoCron}