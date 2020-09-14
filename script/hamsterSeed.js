const {Hamster} = require('../server/db/models')

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

module.exports = seedHamster
