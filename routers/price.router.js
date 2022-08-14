const express = require('express')
const priceService = require('../services/price.service')
const response = require('../constants/response')

const router = express.Router()

router.get('/getprices', async (req, res) => {
  try {
    const limit = req.query.limit
    const offset = req.query.offset
    const data = await priceService.getPrices(limit, offset)
    res.send({
      success: 1,
      data
    })
  } catch (e) {
    res.send({
      success: 0,
      message: response.SERVER_ERROR
    })
  }
})

module.exports = router