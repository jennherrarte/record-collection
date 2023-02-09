const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');
//Database Connection
const db = require('./config/database');
const models = require('./db/models')
const artist = require('./db/models/artist');
const album = require('./db/models/album');


const routes = require('./routes/index.js');

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

// artist.hasMany(album);
// album.belongsTo(artist)



console.log('sync')

const app = express();
app.use(express.json())
app.use('/api/albums', routes.albums);
app.use('/api/artists', routes.artists);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//Gig routes
//app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
db.sync({force: true}).then(() => {
models.sequelize.sync({force:true})
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
    app.listen(PORT, console.log(`Server started on port ${PORT}`));

}).catch(err => console.log("Error: " + err));