'use strict';

const models = require('../db/models')

class ArtistController {

// get artists
    async getArtists(req, res) {
        try {
            //var albumsResponse = []
            const artistsResponse = await models.Artist.findAll()
            console.log('response',artistsResponse)
            return res.status(200).json(artistsResponse)

        } catch (error) {
            res.status(500).send({
                message: 'error hello'
            })
        }
    }

// get artist by id
    async getArtist(req, res) {
        try {
            const artist = await models.Album.findByPk(req.params.id);
            return res.status(200).json(artist)

        } catch (error) {
            console.log(error)
            res.status(500).send({
                message: 'error hello'
            })
        }
    }


// update artist
    async updateArtist(req, res) {
        try {
            const artistId = req.params.id;
            const updated = await models.Artist.update({
                name: req.body.name,
            }, {
                where: {
                    id: artistId
                }
            });

            if (updated) {
                const updatedArtist = await models.Artist.findOne({
                    where: {
                        id: artistId
                    }
                });
                return res.status(200).json({
                    artist: updatedArtist
                });
            }


            throw new Error('Artist not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
}


const artistController = new ArtistController();
module.exports = artistController;