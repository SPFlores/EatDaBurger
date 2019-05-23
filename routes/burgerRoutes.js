const { Burger } = require('../models')

module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/burgers', (req, res) => {
    Burger.findAll()
      .then(burgers => {
        let devoured = []
        let whole = []
        burgers.forEach(burger => {
          if (burger.devoured) {
            devoured.push(burger)
          } else if (!burger.devoured) {
            whole.push(burger)
          }
        })
        // res.render('eaten', { devoured })
        res.render('burgers', { whole, devoured })
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
