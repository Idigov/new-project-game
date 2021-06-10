const { Router } = require('express');
const controllers = require('../controllers/games')
const router = Router()


router.post('/genres/:id/games', controllers.gamePost);
router.get('/games/:id', controllers.gameGet);
router.get('/games', controllers.gameGetAll);
router.get('/genres/:id/games', controllers.gameGetByCategory);

module.exports = router