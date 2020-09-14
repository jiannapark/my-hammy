'use strict'

const db = require('../server/db')

const seedUser = require('./userSeed')
const seedHamster = require('./hamsterSeed')
const seedEnvironment = require('./environmentSeed')
const seedFood = require('./foodSeed')
const seedTracker = require('./trackerSeed')
const seedDiary = require('./diarySeed')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await seedUser()
  const hamsters = await seedHamster()
  const environmentItems = await seedEnvironment()
  const foodItems = await seedFood()
  const trackers = await seedTracker()
  const entries = await seedDiary()

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${hamsters.length} hamsters`)
  console.log(`seeded ${environmentItems.length} environment items`)
  console.log(`seeded ${foodItems.length} food items`)
  console.log(`seeded ${trackers.length} food tracker entries`)
  console.log(`seeded ${entries.length} diary entries`)
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
