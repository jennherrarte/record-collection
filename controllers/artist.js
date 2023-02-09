'use strict';

const models = require('../db/models')

class ArtistController {

// get artists
    async getArtists(req, res) {
        try {
            //var albumsResponse = []
            const albumsResponse = await models.Album.findAll()
            console.log(albumsResponse)
            return res.status(200).json(albumsResponse)

        } catch (error) {
            res.status(500).send({
                message: 'error hello'
            })
        }
    }

// get artist by id
    async getAlbum(req, res) {
        try {
            const album = await models.Album.findByPk(req.params.id);
            return res.status(200).json(album)

        } catch (error) {
            console.log(error)
            res.status(500).send({
                message: 'error hello'
            })
        }
    }


// update artist
    async updateAlbum(req, res) {
        try {
            const albumId = req.params.id;
            const updated = await models.Album.update({
                title: req.body.title,
                genre: req.body.genre,
                release_year: req.body.release_year
            }, {
                where: {
                    id: albumId
                }
            });

            if (updated) {
                const updatedAlbum = await models.Album.findOne({
                    where: {
                        id: albumId
                    }
                });
                return res.status(200).json({
                    album: updatedAlbum
                });
            }


            throw new Error('Album not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
}


const albumController = new AlbumController();
module.exports = albumController;