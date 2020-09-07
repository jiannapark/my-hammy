const User = require('./user')
const Hamster = require('./hamster')
const Environment = require('./environment')
const Food = require('./food')
const Tracker = require('./tracker')
const Diary = require('./diary')

User.hasMany(Hamster)
Hamster.belongsTo(User)
Hamster.hasMany(Environment)
Environment.belongsTo(Hamster)
Hamster.belongsToMany(Food, {through: Tracker})
Food.belongsToMany(Hamster, {through: Tracker})
Hamster.hasMany(Diary)
Diary.belongsTo(Hamster)

module.exports = {
  User,
  Hamster,
  Environment,
  Food,
  Tracker,
  Diary
}
