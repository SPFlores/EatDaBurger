const express = require('express')
const burgerModel = require('../models/burgers.js')

const router = express.Router()

router.get('/', (req, res) => {
  burgerModel.all()
})

module.exports = router
