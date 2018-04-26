const express = require('express');
const app = express();
const path = require('path');
var mongoose = require('mongoose');

var uri = process.env.MONGOLAB_URI || 'mongodb://heroku_wd6dh6wg:725t66hsi2c0cevo92aj47lcd6@ds163294.mlab.com:63294/heroku_wd6dh6wg'
mongoose.connect(uri, function(err, db){
    if(err){
        console.log('Unable to connect to the mongoDB server.', err);
    }
    else{
        console.log('Connection established!', uri);
    }
});

//DB Server
//Schema
var Schema = mongoose.Schema;
var movieSchema = new Schema({
    year: Number,
    name:  String,
    total_views:  Number,
    total_eps:   Number,
    vertivcal_poster:   String,
    date: { type: Date, default: Date.now }
});

//Model
var Movie = mongoose.model('Movie', movieSchema);

app.use(express.static('build'));

app.get('/', function (req, res) {
    res.sendFile(path.join('index.html'));
});

app.get('/index', function (req, res) {
    Movie.find({}).sort({"date":1}).exec(function(err, movie) {
        var map = {};
    
        movie.forEach(function(movie) {
            map[movie._id] = movie;
        });
  
        if(err){
            res.send(err);
        }

        res.json(map);
    });
});

var port = process.env.PORT || 3001;

app.listen(port, "0.0.0.0");