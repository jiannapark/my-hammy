const Sequelize = require('sequelize')
const db = require('../db')

const Diary = db.define('diary', {
  date: {
    type: Sequelize.DATE,
    defaultValue: new Date(Date.now()).toString()
  },
  weather: {
    type: Sequelize.ENUM(
      'Sunny',
      'Partially sunny',
      'Cloudy',
      'Rainy',
      'Windy',
      'Foggy',
      'Snowy'
    )
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  weight: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = Diary
