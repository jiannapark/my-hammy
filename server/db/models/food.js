const Sequelize = require('sequelize')
const db = require('../db')

const Food = db.define('food', {
  type: {
    type: Sequelize.ENUM(
      'Pellet',
      'Vegetable',
      'Fruit',
      'Grain',
      'Legume',
      'Nut',
      'Seed',
      'Protein',
      'Treat',
      'Other'
    ),
    defaultValue: 'Other'
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
  servingSizeMax: {
    type: Sequelize.FLOAT
  },
  servingUnit: {
    type: Sequelize.ENUM('cup', 'tablespoon', 'teaspoon', 'piece')
  },
  frequency: {
    type: Sequelize.ENUM(
      'Daily',
      'Every 1-2 days',
      'Every 2-3 days',
      'Weekly',
      'Bi-weekly',
      'Every 1-2 weeks',
      '1-2 times a week',
      '2 times a week',
      '2-3 times a week',
      'Monthly',
      '1-2 times a month'
    )
  }
})

module.exports = Food
