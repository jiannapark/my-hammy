const {User} = require('../server/db/models')

async function seedUser() {
  const users = await User.bulkCreate([
    {firstName: 'Jianna', email: 'jianna@email.com', password: '123'},
    {firstName: 'Brandon', email: 'brandon@email.com', password: '123'}
  ])
  return users
}

module.exports = seedUser
