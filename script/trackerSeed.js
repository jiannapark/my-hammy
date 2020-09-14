const {Tracker} = require('../server/db/models')

async function seedTracker() {
  const trackerList = [
    {
      hamsterId: 1,
      foodId: 1,
      quantity: 0.5,
      date: new Date('2020-09-11T21:00:00Z')
    },
    {
      hamsterId: 1,
      foodId: 5,
      quantity: 0.1,
      date: new Date('2020-09-12T18:00:00Z')
    },
    {
      hamsterId: 1,
      foodId: 3,
      quantity: 0.1,
      date: new Date('2020-09-12T19:00:00Z')
    }
  ]

  const trackers = await Tracker.bulkCreate(trackerList)
  return trackers
}

module.exports = seedTracker
