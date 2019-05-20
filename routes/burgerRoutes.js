const { Burger } = require('../models/burgers.js')

module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  // app.get('/burgers', (req, res) => {
  //   Burger.findAll()
  //     .then(burgers => res.json(burgers))
  //     .catch(e => console.log(e))
  // })

  // app.post('/burgers', (req, res) => {
  //   Burger.create(req.body)
  //     .then(_ => res.sendStatus(200))
  //     .catch(e => console.log(e))
  // })

  // app.put('/burgers/:id', (req, res) => {
  //   Burger.update(req.body, { where: { id: req.params.id } })
  //     .then(_ => res.sendStatus(200))
  //     .catch(e => console.log(e))
  // })

  // app.delete('/burgers/:id', (req, res) => {
  //   Burger.destroy({ where: { id: req.params.id } })
  //     .then(_ => res.sendStatus(200))
  //     .catch(e => console.log(e))
  // })
}
