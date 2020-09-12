const router = require('express').Router()
const {Tracker, Food} = require('../db/models')
module.exports = router

router.get('/:hamsterId', async (req, res, next) => {
  try {
    const records = await Tracker.findAll({
      where: {
        hamsterId: req.params.hamsterId
      }
      // include: Food,
    })
    const includeFood = records.map(record =>
      Food.findOne({where: {id: record.foodId}})
    )
    const foundFood = await Promise.all(includeFood)
    const recordsWithFood = records.map((record, idx) => {
      record.dataValues.food = foundFood[idx]
      return record
    })
    res.json(recordsWithFood)
  } catch (err) {
    next(err)
  }
})

router.get('/single/:recordId', async (req, res, next) => {
  try {
    const record = await Tracker.findByPk(req.params.recordId)
    res.json(record)
  } catch (err) {
    next(err)
  }
})

router.post('/:hamsterId', async (req, res, next) => {
  try {
    const newRecord = await Tracker.create({
      ...req.body,
      hamsterId: req.params.hamsterId
    })
    res.status(201).json(newRecord)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const recordToUpdate = await Tracker.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (recordToUpdate) {
      res.status(200).json(recordToUpdate)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

router.delete(':id', async (req, res, next) => {
  try {
    const recordToDelete = await Tracker.destroy({
      where: {
        id: req.params.id
      }
    })
    if (recordToDelete) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
