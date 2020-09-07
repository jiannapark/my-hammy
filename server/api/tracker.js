const router = require('express').Router()
const {Tracker} = require('../db/models')
module.exports = router

router.get('/:hamsterId', async (req, res, next) => {
  try {
    const tracks = await Tracker.findAll({
      where: {
        hamsterId: req.params.hamsterId
      }
    })
    res.json(tracks)
  } catch (err) {
    next(err)
  }
})

router.post('/:hamsterId', async (req, res, next) => {
  try {
    const newTrack = await Tracker.create({
      ...req.body,
      hamsterId: req.params.hamsterId
    })
    res.status(201).json(newTrack)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const trackToUpdate = await Tracker.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (trackToUpdate) {
      res.status(200).json(trackToUpdate)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

router.delete(':id', async (req, res, next) => {
  try {
    const trackToDelete = await Tracker.destroy({
      where: {
        id: req.params.id
      }
    })
    if (trackToDelete) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
