const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/burgers', (req, res) => {
  res.render('burgers')
})

module.exports = router
