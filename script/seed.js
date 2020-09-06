'use strict'

const db = require('../server/db')
const {
  User,
  Hamster,
  Environment,
  Food,
  Tracker,
  Diary
} = require('../server/db/models')

async function seedUser() {
  const users = await Promise.all([
    User.create({email: 'jianna@email.com', password: '123'}),
    User.create({email: 'brandon@email.com', password: '123'})
  ])
  return users
}

async function seedHamster() {
  const hamsters = await Promise.all([
    Hamster.create({
      name: 'Pepper',
      species: 'Winter White',
      age: 0,
      birthday: new Date('2020-07-30T17:20:30Z'),
      image: '../public/images/apple-slice-1.jpg',
      bio:
        "Curious, feisty, and unbearably adorable, this little fella proves the wise saying: 'The way to a hamster's heart is through its stomach.'"
    })
  ])
  return hamsters
}

// async function seedEnvironment() {}

// async function seedFood() {}

// async function seedTracker() {}

async function seedDiary() {
  const entries = await Promise.all([
    Diary.create({
      date: new Date('2020-08-30T17:20:30Z'),
      content:
        "Today I brought Pepper home. He's so tiny and precious! He roamed around the living room to get used to his new home. He also ate a bit of a blueberry. I hope I can provide for him the best life possible!"
    }),
    Diary.create({
      date: new Date('2020-09-05T19:40:00Z'),
      weather: 'Sunny',
      content:
        "Pepper didn't bite me today! To be more precise, he didn't succeed in biting me because I distracted him with treats. But really, as I was giving it a piece of carrot, he climbed onto my hands, and instead of biting my fingers he started climbing all over me! Brandon had to helped get him off my back because I was worried he might fall and get hurt."
    })
  ])
  return entries
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await seedUser()
  const hamsters = await seedHamster()
  const entries = await seedDiary()

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${hamsters.length} hamsters`)
  console.log(`seeded ${entries.length} entries`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
