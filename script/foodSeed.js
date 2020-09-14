const {Food} = require('../server/db/models')

async function seedFood() {
  const foodList = [
    {
      type: 'Pellet',
      brand: 'Oxbow',
      name: 'Essentials Hamster & Gerbil Food',
      imageUrl: 'https://s7d2.scene7.com/is/image/PetSmart/5173696',
      servingSizeMax: 1,
      servingUnit: 'tablespoon',
      frequency: 'Every 2-3 days'
    },
    {
      type: 'Pellet',
      brand: 'Vitakraft',
      name: 'Vitasmart Complete Nutrition',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81gJzoCzwZL._AC_SL1500_.jpg',
      servingSizeMax: 0.5,
      servingUnit: 'cup',
      frequency: 'Every 2-3 days'
    },
    {
      type: 'Treat',
      brand: 'Vitakraft',
      name: 'Strawberry Yogurt Drops',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81M3lr954zL._AC_SL1500_.jpg',
      servingSizeMax: 1,
      servingUnit: 'piece',
      frequency: 'Every 1-2 weeks'
    },
    {
      type: 'Treat',
      brand: 'Vitakraft',
      name: 'Apple & Honey Stick',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/712QuttLfRL._AC_SL1500_.jpg',
      servingSizeMax: 0.1,
      servingUnit: 'piece',
      frequency: 'Every 1-2 weeks'
    },
    {
      type: 'Treat',
      brand: 'Ware',
      name: 'Rice Pops',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81FEpwi3sFL._AC_SL1500_.jpg',
      servingSizeMax: 0.5,
      servingUnit: 'piece',
      frequency: 'Every 1-2 weeks'
    },
    {
      type: 'Seed',
      brand: 'Gerbs',
      name: 'Raw Whole Sunflower Seeds',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/9151SQkWTEL._SL1500_.jpg',
      servingSizeMax: 5,
      servingUnit: 'piece',
      frequency: 'Daily'
    },
    {
      type: 'Treat',
      brand: 'Whimzees',
      name: 'Dental Dog Treat Stix',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81h2vE1cC4L._AC_SL1500_.jpg',
      servingSizeMax: 0.5,
      servingUnit: 'piece',
      frequency: '1-2 times a month'
    },
    {
      type: 'Grain',
      brand: "Brown's Tropical Carnival",
      name: 'Natural Wheat Sprays',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81s-3wx055L._AC_SL1500_.jpg',
      servingSizeMax: 2,
      servingUnit: 'teaspoon',
      frequency: 'Daily'
    },
    {
      type: 'Fruit',
      name: 'Blueberry',
      imageUrl:
        'https://images.unsplash.com/photo-1598910715101-8fd3636e3c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80',
      servingSizeMax: 1,
      servingUnit: 'piece',
      frequency: '1-2 times a week'
    },
    {
      type: 'Pellet',
      brand: 'Mazuri',
      name: 'Rat & Mouse Food',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91oGUAsDhoL._AC_SL1500_.jpg',
      servingSizeMax: 1,
      servingUnit: 'tablespoon',
      frequency: 'Every 2-3 days'
    },
    {
      type: 'Pellet',
      brand: 'Higgins',
      name: 'Vita Garden Hamster & Gerbil Food',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71gvXKcsn9L._AC_SL1500_.jpg',
      servingSizeMax: 1,
      servingUnit: 'tablespoon',
      frequency: 'Every 2-3 days'
    },
    {
      type: 'Protein',
      name: 'Scrambled or Boiled Egg White',
      imageUrl:
        'https://images.unsplash.com/photo-1529570634977-ec042420117b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      servingSizeMax: 0.5,
      servingUnit: 'teaspoon',
      frequency: '1-2 times a week'
    },
    {
      type: 'Protein',
      brand: "Fluker's",
      name: 'Freeze-Dried Mealworms',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81ldAXw5hCL._AC_SL1500_.jpg',
      servingSizeMax: 5,
      servingUnit: 'piece',
      frequency: 'Every 1-2 days'
    }
  ]

  const foodItems = await Food.bulkCreate(foodList)
  return foodItems
}

module.exports = seedFood
