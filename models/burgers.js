const Sequelize = require('sequelize')
const connection = require('../config')

class Burger extends Sequelize.Model { }
Burger.init({
  burger_name: {
    type: Sequelize.STRING,
    notNull: true,
    len: [1, 50]
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    notNull: true,
    defaultValue: false
  }
}, { sequelize: connection, modelName: 'burger' })

module.exports = Burger
