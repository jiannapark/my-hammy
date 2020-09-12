const Sequelize = require('sequelize')
const db = require('../db')

const Tracker = db.define('tracker', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: new Date(Date.now()).toString()
  }
})

module.exports = Tracker
