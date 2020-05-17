const router = require("express").Router();
const bookController = require("../controller/bookController");

router.route("/api/savedbooks")
    .post(bookController.saveBook)
    .get(bookController.getSavedBooks)

module.exports = router;