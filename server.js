const express = require('express')
const handlebars = require('express-handlebars]')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

require('./routes')(app)

require('./config').connect(_ => { app.listen(3000) })
