var BookInstance = require('../models/bookinstance');


// Display list of bookinstances
exports.bookinstance_list = function(req, res) {
    res.send('NOT IMPLEMENTED: bookinstance list.');
};

// Display specific bookinstance by ID
exports.bookinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: bookinstance detail: ' + req.params.id);
};

// Display bookinstance create form (GET)
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: bookinstance create GET.');
};

// Display bookinstance create form (POST)
exports.bookinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: bookinstance create POST.');
};

// Delete bookinstance form (GET)
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: bookinstance delete GET.');
};

// Delete bookinstance form (POST) 
exports.bookinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: bookinstance delete POST.');
};

// Update bookinstance form (GET) 
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: bookinstance update GET.');
};

// Update bookinstance form (POST) 
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: bookinstance update POST.');
};