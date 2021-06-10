const { Router } = require('express')
const router = Router()

router.use(require('./games'))
router.use(require('./genres'))
router.use(require('./reviews'))

module.exports = router