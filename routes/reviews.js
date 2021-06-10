const controller = require("../controllers/reviews")
const { Router } = require("express")
const router = Router()

router.get('/game/:id/review', controller.getReviews)
router.post('/game/:id/review', controller.postReviews)
router.delete('/game/id:/review/:id', controller.deleteReviews)

module.exports = router