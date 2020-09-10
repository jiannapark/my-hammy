const router = require('express').Router()
const {Food} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const foodItems = await Food.findAll()
    res.json(foodItems)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newFood = await Food.create(req.body)
    res.status(201).json(newFood)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const foodToUpdate = await Food.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (foodToUpdate) {
      res.status(200).json(foodToUpdate)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const foodToDelete = await Food.destroy({
      where: {
        id: req.params.id
      }
    })
    if (foodToDelete) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
