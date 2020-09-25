const router = require('express').Router()
const {Diary} = require('../db/models')
module.exports = router

router.get('/:hamsterId/weight', async (req, res, next) => {
  try {
    const weights = await Diary.findAll({
      where: {
        hamsterId: req.params.hamsterId
      },
      attributes: ['date', 'weight']
    })
    res.json(weights)
  } catch (err) {
    next(err)
  }
})

router.get('/:hamsterId', async (req, res, next) => {
  try {
    const diaryEntries = await Diary.findAll({
      where: {
        hamsterId: req.params.hamsterId
      }
    })
    res.json(diaryEntries)
  } catch (err) {
    next(err)
  }
})

router.get('/single/:entryId', async (req, res, next) => {
  try {
    const diaryEntry = await Diary.findByPk(req.params.entryId)
    res.json(diaryEntry)
  } catch (err) {
    next(err)
  }
})

router.post('/:hamsterId', async (req, res, next) => {
  try {
    const newEntry = await Diary.create({
      ...req.body,
      hamsterId: req.params.hamsterId
    })
    res.status(201).json(newEntry)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const entryToUpdate = await Diary.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (entryToUpdate) {
      res.status(200).json(entryToUpdate)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const entryToDelete = await Diary.destroy({
      where: {
        id: req.params.id
      }
    })
    if (entryToDelete) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
