const BookModel = require('../models/bookModel');

module.exports = {
    saveBook: function(req, res) {
        const bookInfo = {
            title: "",
            authors: [],
            description: "",
            image: "",
            link: ""
        };
        try {
            bookInfo.title = req.body.title;
            bookInfo.image = req.body.imageLinks.smallThumbnail;
            bookInfo.authors = req.body.authors;
            bookInfo.description = req.body.description;
            bookInfo.link = req.body.infoLink;
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
    },
    deleteBook: function(req, res) {
        BookModel.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    }
};