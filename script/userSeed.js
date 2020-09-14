const {User} = require('../server/db/models')

async function seedUser() {
  const users = await User.bulkCreate([
    {email: 'jianna@email.com', password: '123'},
    {email: 'brandon@email.com', password: '123'}
  ])
  return users
}

module.exports = seedUser
