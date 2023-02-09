const models  = require('../db/models')
const express = require('express');
const router  = express.Router();

const artistController = require('../controllers/artist')

router.get('/', artistController.getArtist)
router.get('/:id', artistController.updateArtist)
// router.post('/', userController.createUser)
router.put('/:id', artistController.updateArtist)
// router.delete('/:id', userController.deleteUser)

module.exports = router;