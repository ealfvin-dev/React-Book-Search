const BookModel = require('../models/bookModel');

module.exports = {
    saveBook: function(req, res) {
        const bookInfo = {
            title: "",
            authors: [],
            description: "",
            image: ""
        };
        try {
            bookInfo.title = req.body.title;
            bookInfo.authors = req.body.authors;
            bookInfo.description = req.body.description;
            bookInfo.image = req.body.imageLinks.smallThumbnail;
        }
        finally {
            //pass
        }
        BookModel.create(bookInfo)
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    },
    getSavedBooks: function(req, res) {
        BookModel.find({})
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    }
};