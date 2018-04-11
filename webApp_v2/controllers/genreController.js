var Genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');

// Display list of genres
exports.genre_list = function(req, res, next) {
    Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genres) {
        if(err) {return next(err);}
        //Successful, so render
        res.render(genre_list, {title: 'Genre List', genre_list: list_genres});
    });
};

// Display specific genre by ID
exports.genre_detail = function(req, res, next) {
    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id)
            .exec(callback);
        },
        genre_books: function(callback) {
            Book.find({'genre':req.params.id})
            .exec(callback);
        }
    }, function(err, results) {
        if(err) {return next(err);}
        if(results.genre==null) {
            var err = new Error('Genre not found');
            err.status = 404;
            return next(err);
        }
        res.render('genre_detail', {title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books});
    });

};

// Display genre create form (GET)
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: genre create GET.');
};

// Display genre create form (POST)
exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: genre create POST.');
};

// Delete genre form (GET)
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: genre delete GET.');
};

// Delete genre form (POST)
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: genre delete POST.');
};

// Update genre form (GET)
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: genre update GET.');
};

// Update genre form (POST)
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: genre update POST.');
};
