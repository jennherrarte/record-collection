'use strict';

const models = require('../db/models')

class AlbumController {
  
  
  async getAlbums(req,res) {
    try{
        //var albumsResponse = []
        const albumsResponse = await models.Album.findAll()

        console.log(albumsResponse)

            // albums.forEach(function(user){
            //     usersResponse.push(userService.formatUser(user))
            //   });

           return res.status(200).json(albumsResponse)
  
    } catch(ex) {
        res.status(500).send({ message: 'error hello' })
    }
}






}


const albumController = new AlbumController();
module.exports = albumController;