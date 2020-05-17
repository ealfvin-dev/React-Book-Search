const router = require("express").Router();
const bookController = require("../controller/bookController");

router.route("/api/savedbooks")
    .post(bookController.saveBook)
    .get(bookController.getSavedBooks)

router.route("/api/savedbooks/:id")
    .delete(bookController.deleteBook)

module.exports = router;