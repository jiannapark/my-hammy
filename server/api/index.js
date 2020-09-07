const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/hamster', require('./hamster'))
router.use('/environment', require('./environment'))
router.use('/food', require('./food'))
router.use('/tracker', require('./tracker'))
router.use('/diary', require('./diary'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
