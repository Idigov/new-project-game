const Review = require('../models/Review')

const controllers = {
  getReviews: async (req,res) => {
    const id = req.params.id
    const review = await Review.find({game: id,})
    res.json(review)
  },

  postReviews: async (req,res) => {
    const review = new Review({
      game: req.params.id,
      text: req.body.text
    })
    await review.save()
    res.json(review)
  },

  deleteReviews: async (req,res) => {
    const id = req.params.id
    const review = await Review.findByIdAndDelete({_id:id})
    res.json(review)
  }
}

module.exports = controllers