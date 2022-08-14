const express = require('express')
const intervalService = require('../services/interval.service')
const response = require('../constants/response')

const router = express.Router()

router.get('/getinterval', async (req, res) => {
  try {
    const result = await intervalService.getInterval()
    res.send(result)
  } catch (e) {
    res.send({
      success: 0,
      message: response.SERVER_ERROR
    })
  }
})

router.put('/changeinterval', async (req, res) => {
  try {
    await intervalService.putInterval(req.body.interval)
    res.send({success: 1})
  } catch (e) {
    res.send({
      success: 0,
      message: response.SERVER_ERROR
    })
  }
})

module.exports = router