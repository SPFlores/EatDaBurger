const { Burger } = require('../models')

module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/burgers', (req, res) => {
    Burger.findAll()
      .then(burgers => {
        res.render('burgers', { burgers })
        console.log('got here')
      })
      .catch(e => console.log(e))
  })

  app.post('/burgers', (req, res) => {
    Burger.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.put('/burgers/:id', (req, res) => {
    Burger.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // not needed, but for reference moving forward or for future implementations
  // app.delete('/burgers/:id', (req, res) => {
  //   Burger.destroy({ where: { id: req.params.id } })
  //     .then(_ => res.sendStatus(200))
  //     .catch(e => console.log(e))
  // })
}
