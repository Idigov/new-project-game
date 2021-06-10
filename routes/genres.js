const express = require('express')
const router = express.Router()
const controller = require('../controllers/genres')


router.get('/', controller.genresAll)
router.post('/genres', controller.genresPost)


module.exports = router