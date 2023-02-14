'use strict';

const models = require('../db/models')

class AlbumController {

// get albums
    async getAlbums(req, res) {
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

// get album by id
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


// update album 
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


    async deleteAlbum(req, res) {
        try {
            const albumId = req.params.id;
            const deleted = await models.Album.destroy({
                where: {
                    id: albumId
                }
            });
            console.log(deleted)
            if(deleted) {
                return res.status(200);
            }

            throw new Error('Album not deleted');
        } catch (error) {
            return res.status(500).send(error.message);
        }

    };



}


const albumController = new AlbumController();
module.exports = albumController;