const Sequelize = require('sequelize')
const db = require('../db')

const Food = db.define('food', {
  type: {
    type: Sequelize.ENUM(
      'pellet',
      'vegetable',
      'fruit',
      'grain',
      'legume',
      'nut',
      'seed',
      'protein',
      'treat',
      'other'
    ),
    defaultValue: 'other'
  },
  brand: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  servingSizeMax: {
    type: Sequelize.FLOAT
  },
  servingUnit: {
    type: Sequelize.ENUM('teaspoon', 'piece')
  },
  frequency: {
    type: Sequelize.ENUM(
      'daily',
      'every 1-2 days',
      'weekly',
      'bi-weekly',
      'every 1-2 weeks',
      '1-2 times a week',
      '2 times a week',
      '2-3 times a week',
      'monthly',
      '1-2 times a month'
    )
  }
})

module.exports = Food
