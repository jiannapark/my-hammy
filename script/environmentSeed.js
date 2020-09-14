const {Environment} = require('../server/db/models')

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
      type: 'enrichment',
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
      hamsterId: 1,
      type: 'essential',
      brand: 'Zoo Med',
      name: 'ReptiSand',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51ViGxdQXxL._AC_.jpg'
    },
    {
      hamsterId: 1,
      type: 'enrichment',
      brand: 'Niteangel',
      name: 'Natural Wooden Tunnel',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71mOjeWOZUL._AC_SL1300_.jpg'
    },
    {
      hamsterId: 1,
      type: 'substrate',
      brand: 'Oxbow',
      name: 'Western Timothy Hay',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81MKd7%2BonoL._AC_SL1500_.jpg'
    },
    {
      hamsterId: 1,
      type: 'enrichment',
      brand: 'Niteangel',
      name: 'Suspension Bridge',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61Zg7dWPpPL._AC_SL1300_.jpg'
    },
    {
      hamsterId: 1,
      type: 'enclosure',
      brand: 'Ferplast',
      name: 'Favola Hamster Cage',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71qCqDOND0L._AC_SL1000_.jpg',
      size: 340,
      lastCleaned: new Date('2020-09-12T11:00:00Z')
    },
    {
      hamsterId: 1,
      type: 'enclosure',
      brand: 'Prevue',
      name: 'Universal Small Animal Home',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81oRP4tXQbL._AC_SL1500_.jpg',
      size: 620,
      lastCleaned: new Date('2020-09-14T11:00:00Z')
    },
    {
      hamsterId: 1,
      type: 'substrate',
      brand: 'Kaytee',
      name: 'Clean & Cozy White Small Animal Bedding',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81P8wwMsqvL._AC_SL1500_.jpg'
    },
    {
      hamsterId: 1,
      type: 'substrate',
      brand: 'Kaytee',
      name: 'All Natural Aspen Bedding',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71aS25TRbwL._AC_SL1000_.jpg'
    },
    {
      hamsterId: 1,
      type: 'substrate',
      brand: 'Oxbow',
      name: 'Orchard Grass Hay',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/8107RWWl5zL._AC_SL1500_.jpg'
    },
    {
      hamsterId: 1,
      type: 'enrichment',
      brand: 'andwe',
      name: 'Coconut Hut Hamster House Bed',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71fvYqImcWL._AC_SL1500_.jpg'
    }
  ]

  const environmentItems = await Environment.bulkCreate(environmentList)
  return environmentItems
}

module.exports = seedEnvironment
