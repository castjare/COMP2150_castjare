var Book = require('../models/book');

// Home page of our app
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of book
exports.book_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list.');
};

// Display specific book by ID
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form (GET)
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET.');
};

// Display book create form (POST)
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST.');
};

// Delete book form (GET)
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET.');
};

// Delete book form (POST) 
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST.');
};

// Update book form (GET) 
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET.');
};

// Update book form (POST) 
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST.');
};