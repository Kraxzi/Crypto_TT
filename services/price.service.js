const db = require('../models/index')
const Bitcoin_price = require('../models/bitcoin_price')(db.sequelize, db.Sequelize.DataTypes)

const priceService = { 
  getPrices: async (limit, offset) => {
    const prices = await Bitcoin_price.findAll({limit, offset})
    return prices
  }
}

module.exports = priceService