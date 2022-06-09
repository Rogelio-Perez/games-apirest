const mongoose = require('mongoose')

const Games = mongoose.model('Game', {
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgURL: { 
    public_id: { type: String, required: true },
    secure_url: { type: String, required: true },
   },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  versionKey: false,
})

module.exports = Games
