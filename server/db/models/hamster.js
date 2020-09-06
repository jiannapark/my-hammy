const Sequelize = require('sequelize')
const db = require('../db')

const Hamster = db.define('hamster', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  species: {
    type: Sequelize.ENUM(
      'Syrian',
      'Robo',
      'Winter White',
      "Campbell''s",
      'Chinese'
    ),
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5
    }
  },
  birthday: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT
  },
  bio: {
    type: Sequelize.TEXT
  }
})

module.exports = Hamster
