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
  const users = await User.bulkCreate([
    {email: 'jianna@email.com', password: '123'},
    {email: 'brandon@email.com', password: '123'}
  ])
  return users
}

async function seedHamster() {
  const hamsters = await Hamster.bulkCreate([
    {
      name: 'Pepper',
      species: 'Winter White',
      age: 0,
      birthday: new Date('2020-07-30T17:20:30Z'),
      imageUrl: 'images/apple-slice-1.jpg',
      bio:
        "Curious, feisty, and unbearably adorable, this little fella proves the wise saying: 'The way to a hamster's heart is through its stomach.'",
      userId: 1
    }
  ])
  return hamsters
}

async function seedEnvironment() {
  const environmentList = [
    {
      hamsterId: 1,
      type: 'enclosure',
      brand: 'Kaytee',
      name: 'Easy Clean Small Pet Habitat',
      imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/5219425',
      size: 168,
      lastCleaned: new Date('2020-09-04T11:00:00Z')
    },
    {
      hamsterId: 1,
      type: 'substrate',
      brand: 'Carefresh',
      name: 'Small Pet Bedding White',
      imageUrl:
        'https://assets.petco.com/petco/image/upload/f_auto,q_auto,t_ProductDetail-large/431796-center-1'
    },
    {
      hamsterId: 1,
      type: 'essential',
      brand: 'Niteangel',
      name: 'Wooden Ladder Bridge',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/712VYBmAzLL._AC_SL1300_.jpg'
    },
    {
      hamsterId: 1,
      type: 'enrichment',
      brand: 'Zalalova',
      name: '9-piece Applewood Chew Toys',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71bA0QkPBiL._AC_SL1200_.jpg'
    },
    {
      hamsterId: 1,
      type: 'enrichment',
      brand: 'Zalalova',
      name: '10-piece Applewood Chew Toys',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71Q5KDhbplL._AC_SL1001_.jpg'
    },
    {
      type: 'enrichment',
      brand: 'Zoo Med',
      name: 'Reptisand',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51ViGxdQXxL._AC_.jpg'
    },
    {
      type: 'enrichment',
      brand: 'Niteangel',
      name: 'Natural Wooden Tunnel',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71mOjeWOZUL._AC_SL1300_.jpg'
    },
    {
      type: 'substrate',
      brand: 'Oxbow',
      name: 'Western Timothy Hay',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81MKd7%2BonoL._AC_SL1500_.jpg'
    }
  ]

  const environmentItems = await Environment.bulkCreate(environmentList)
  return environmentItems
}

async function seedFood() {
  const foodList = [
    {
      type: 'pellet',
      brand: 'Vitakraft',
      name: 'Vitasmart Complete Nutrition',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81gJzoCzwZL._AC_SL1500_.jpg',
      servingSizeMax: 0.5,
      servingUnit: 'cup',
      frequency: 'every 2-3 days'
    },
    {
      type: 'treat',
      brand: 'Vitakraft',
      name: 'Strawberry Yogurt Drops',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81M3lr954zL._AC_SL1500_.jpg',
      servingSizeMax: 1,
      servingUnit: 'piece',
      frequency: 'every 1-2 weeks'
    },
    {
      type: 'treat',
      brand: 'Vitakraft',
      name: 'Apple & Honey Stick',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/712QuttLfRL._AC_SL1500_.jpg',
      servingSizeMax: 0.1,
      servingUnit: 'piece',
      frequency: 'every 1-2 weeks'
    },
    {
      type: 'treat',
      brand: 'Ware Manufacturing',
      name: 'Rice Pops',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81FEpwi3sFL._AC_SL1500_.jpg',
      servingSizeMax: 0.5,
      servingUnit: 'piece',
      frequency: 'every 1-2 weeks'
    },
    {
      type: 'seed',
      brand: 'Gerbs',
      name: 'Raw Whole Sunflower Seeds',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/9151SQkWTEL._SL1500_.jpg',
      servingSizeMax: 5,
      servingUnit: 'piece',
      frequency: 'daily'
    },
    {
      type: 'treat',
      brand: 'Whimzees',
      name: 'Dental Dog Treat Stix',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81h2vE1cC4L._AC_SL1500_.jpg',
      servingSizeMax: 0.5,
      servingUnit: 'piece',
      frequency: '1-2 times a month'
    },
    {
      type: 'grain',
      brand: "Brown''s Tropical Carnival",
      name: 'Natural Wheat Sprays',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81s-3wx055L._AC_SL1500_.jpg',
      servingSizeMax: 2,
      servingUnit: 'teaspoon',
      frequency: 'daily'
    }
  ]

  const foodItems = await Food.bulkCreate(foodList)
  return foodItems
}

// async function seedTracker() {
//   const trackerList = [{}]

//   const trackers = await Tracker.bulkCreate(trackerList)
//   return trackers
// }

async function seedDiary() {
  const entries = await Diary.bulkCreate([
    {
      date: new Date('2020-08-30T17:20:30Z'),
      content:
        "Today I brought Pepper home. He's so tiny and precious! He roamed around the living room to get used to his new home. He also ate a bit of a blueberry. I hope I can provide for him the best life possible!"
    },
    {
      date: new Date('2020-09-05T19:40:00Z'),
      weather: 'Sunny',
      content:
        "Pepper didn't bite me today! To be more precise, he didn't succeed in biting me because I distracted him with treats. But really, as I was giving it a piece of carrot, he climbed onto my hands, and instead of biting my fingers he started climbing all over me! Brandon had to helped get him off my back because I was worried he might fall and get hurt."
    }
  ])
  return entries
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await seedUser()
  const hamsters = await seedHamster()
  const environmentItems = await seedEnvironment()
  const foodItems = await seedFood()
  // const trackers = await seedTracker()
  const entries = await seedDiary()

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${hamsters.length} hamsters`)
  console.log(`seeded ${environmentItems.length} environment items`)
  console.log(`seeded ${foodItems.length} food items`)
  // console.log(`seeded ${trackers.length} food tracker entries`)
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
