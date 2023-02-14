const models  = require('../db/models')
const express = require('express');
const router  = express.Router();

const albumController = require('../controllers/album')

router.get('/', albumController.getAlbums)
 router.get('/:id', albumController.updateAlbum)
// router.post('/', userController.createUser)
router.put('/:id', albumController.updateAlbum)
router.delete('/:id', albumController.deleteAlbum)

module.exports = router;