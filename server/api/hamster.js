const router = require('express').Router()
const {Hamster} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const hamsters = await Hamster.findAll({where: {userId: req.params.userId}})
    res.json(hamsters)
  } catch (err) {
    next(err)
  }
})

router.get('/single/:hamsterId', async (req, res, next) => {
  try {
    const hamster = await Hamster.findByPk(req.params.hamsterId)
    res.json(hamster)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId', async (req, res, next) => {
  try {
    const newHamster = await Hamster.create({
      ...req.body,
      userId: req.params.userId
    })
    res.status(201).json(newHamster)
  } catch (err) {
    next(err)
  }
})

router.put('/:hamsterId', async (req, res, next) => {
  try {
    const hamsterToUpdate = await Hamster.update(req.body, {
      where: {
        id: req.params.hamsterId
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
router.delete(':hamsterId', async (req, res, next) => {
  try {
    const hamsterToDelete = await Hamster.destroy({
      where: {
        id: req.params.hamsterId
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
