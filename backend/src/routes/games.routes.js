const { Router } = require('express')
const router = Router()
const game = require('../controllers/games.controller')

router.get('/', game.list)
router.post('/', game.post)
router.get('/:id', game.get)
router.put('/:id', game.put)
router.patch('/:id', game.put)
router.delete('/:id', game.delete)

module.exports = router
