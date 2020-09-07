const router = require('express').Router()
const {Hamster} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const hamsters = await Hamster.findAll()
    res.json(hamsters)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newHamster = await Hamster.create(req.body)
    res.status(201).json(newHamster)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const hamsterToUpdate = await Hamster.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (hamsterToUpdate) {
      res.status(200).json(hamsterToUpdate)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

// :(
router.delete(':id', async (req, res, next) => {
  try {
    const hamsterToDelete = await Hamster.destroy({
      where: {
        id: req.params.id
      }
    })
    if (hamsterToDelete) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
