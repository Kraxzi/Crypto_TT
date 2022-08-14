const db = require('../models/index')
const Interval = require('../models/intervals')(db.sequelize, db.Sequelize.DataTypes)
const { generateCronExpression } = require('../utils/cron.utils')
let {cryptoCron, generateCryptoCron} = require('../crons/crypto-api.cron')

const intervalService = {
  getInterval: async () => {
    const currentInterval = await Interval.findOne()
    return currentInterval
  },

  putInterval: async (interval) => {
    cryptoCron[0].stop()
    await Interval.destroy({truncate: true})
    await Interval.create({interval})
    cryptoCron[0] = generateCryptoCron(generateCronExpression(interval))
    cryptoCron[0].start()
  }
}

module.exports = intervalService