const {Diary} = require('../server/db/models')

async function seedDiary() {
  const entries = await Diary.bulkCreate([
    {
      date: new Date('2020-08-30T17:20:30Z'),
      hamsterId: 1,
      content:
        "Today I brought Pepper home. He's so tiny and precious! He roamed around the living room to get used to his new home. He also ate a bit of a blueberry. I hope I can provide for him the best life possible!"
    },
    {
      date: new Date('2020-09-05T19:40:00Z'),
      hamsterId: 1,
      weather: 'Sunny',
      content:
        "Pepper didn't bite me today! To be more precise, he didn't succeed in biting me because I distracted him with treats. But really, as I was giving it a piece of carrot, he climbed onto my hands, and instead of biting my fingers he started climbing all over me! Brandon had to helped get him off my back because I was worried he might fall and get hurt.",
      weight: 30
    },
    {
      date: new Date('2020-09-08T19:40:00Z'),
      hamsterId: 1,
      content:
        "We turned our bathtub into Pepper's enclosure. We covered the bottom with a blanket then moved the cage into the tub with doors open. Pepper much prefers the large space he could now explore, with added wooden toys and bridges! He burrowed under the blanket and soon fell asleep there. When awake, he can use the ladder to go back to his cage where he can eat, drink, and run on the wheel.",
      weight: 31
    },
    {
      date: new Date('2020-09-12T20:40:00Z'),
      hamsterId: 1,
      content:
        'A slightly bigger cage arrived. I filled the bottom part with fresh new beddings and hay, placed more toys and sprinkled some seeds for Pepper to forage. Ideally, I would like to find a 40 gallon aquarium tank where I could provide at least 6 inches of substrate height for my little burrow friend (and move on from the bathtub).'
    },
    {
      date: new Date('2020-09-14T11:00:00Z'),
      hamsterId: 1,
      weather: 'Cloudy',
      content:
        "Pepper overate over the weekend and now seem sluggish. I shouldn't have left that huge wheat spray. He seems to enjoy drinking water out of his tiny tealight candle holder more than the water bottle, as it probably feels more natural to him.",
      weight: 33
    }
  ])
  return entries
}

module.exports = seedDiary
