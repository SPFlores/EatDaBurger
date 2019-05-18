const express = require('express')
const { join } = require('path')

const server = express()

const routes = require('./routes')

server.use(express.static(join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
server.set('view engine', '.hbs')

server.use(routes)

server.listen(3000)
