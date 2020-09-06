const Sequelize = require('sequelize')
const db = require('../db')

const Environment = db.define('environment', {
  type: {
    type: Sequelize.ENUM('enclosure', 'substrate', 'essential', 'enrichment'),
    allowNull: false
  },
  brand: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  size: {
    type: Sequelize.INTEGER
  },
  lastCleaned: {
    type: Sequelize.DATE
  }
})

module.exports = Environment
