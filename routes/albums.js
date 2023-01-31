const models  = require('../db/models')
const express = require('express');
const router  = express.Router();

const albumController = require('../controllers/album')

router.get('/', albumController.getAlbums)
// router.get('/:id', userController.getUser)
// router.post('/', userController.createUser)
// router.put('/:id', userController.updateUser)
// router.delete('/:id', userController.deleteUser)

module.exports = router;