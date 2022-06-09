const Games = require('../models/Games')
const { uploadImage, deleteImage } = require('../cloudinary')
const fsf = require('fs-extra')

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
    const { title, description, price } = req.body
    const { imgURL } = req.files

    const game = new Games({
      title: title,
      description: description,
      price: price,
    })

    if (req.files?.imgURL) {
      const res = await uploadImage(imgURL.tempFilePath)
      game.imgURL = {
        public_id: res.public_id,
        secure_url: res.secure_url,
      }

      await fsf.unlink(imgURL.tempFilePath)
    }

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
    const { id } = req.params
    const game = await Games.findOne({ _id: id })
    if (game) {
      game.remove()
    }
    if (game.imgURL?.public_id) {
      await deleteImage(game.imgURL.public_id)
    }
    res.sendStatus(204)
  },
}

module.exports = Game
