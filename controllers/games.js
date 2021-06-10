const game =require('../models/Game');

const controllers = {
    gamePost: async (req, res) => {
        const postGame =  new game({
            name: req.body.name,
            rating: req.body.rating,
            genre: req.params.id
        })
        await postGame.save()
        res.json(postGame)

    },
    gameGet: async (req, res) => {
        const getGame = await game.findById(req.params.id)
        res.json(getGame)
    },
    gameGetAll: async (req, res) => {
        const getAll = await game.find({})
        res.json(getAll)
    },
    gameGetByCategory: async (req, res) => {
        const getById = await game.find({ Genre: req.params.id })
        res.json(getById)
    }
}

module.exports = controllers