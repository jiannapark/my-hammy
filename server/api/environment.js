const router = require('express').Router()
const {Environment} = require('../db/models')
module.exports = router

router.get('/:hamsterId', async (req, res, next) => {
  try {
    const environmentItems = await Environment.findAll({
      where: {hamsterId: req.params.hamsterId}
    })
    res.json(environmentItems)
  } catch (err) {
    next(err)
  }
})

router.get('/single/:itemId', async (req, res, next) => {
  try {
    const singleEnvironmentItem = await Environment.findByPk(req.params.itemId)
    res.json(singleEnvironmentItem)
  } catch (err) {
    next(err)
  }
})

router.post('/:hamsterId', async (req, res, next) => {
  try {
    const newEnvironment = await Environment.create({
      ...req.body,
      hamsterId: req.params.hamsterId
    })
    res.status(201).json(newEnvironment)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const environmentToUpdate = await Environment.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (environmentToUpdate) {
      res.status(200).json(environmentToUpdate)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

router.delete(':id', async (req, res, next) => {
  try {
    const environmentToDelete = await Environment.destroy({
      where: {
        id: req.params.id
      }
    })
    if (environmentToDelete) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
