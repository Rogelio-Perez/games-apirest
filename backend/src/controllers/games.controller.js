const Games = require('../models/Games')

const Game = {
  get: async (req, res) => {
    const { id } = req.params
    const game = await Games.findOne({ _id: id })
    res.status(200).send(game)
  },
  list: async (req, res) => {
    const games = await Games.find()
    res.status(200).send(games)
  },
  post: async (req, res) => {
    const game = new Games(req.body)
    const savedGame = await game.save() 
    res.status(201).send(savedGame._id)
  },
  put: async (req, res) => {
    const { id } = req.params
    const game = await Games.findOne({ _id: id })
    Object.assign(game, req.body)
    await game.save()
    res.sendStatus(204)
  },
  delete: async (req, res) => {
    const { id } =req.params
    const game = await Games.findOne({ _id: id })
    if (game) {
      game.remove()
    }
    res.sendStatus(204)
  }
}

module.exports = Game
