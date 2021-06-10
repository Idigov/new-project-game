const Genres = require('../models/Genre');

    const controllers = {
      genresAll: async (req, res) => {
        const genres = await Genres.find({})
        res.json(genres)
      },

      genresPost: async (req, res) => {
        const genres = await new Genres({ title: req.body.title })
        await genres.save()
        res.json(genres)
      }
    }
module.exports = controllers