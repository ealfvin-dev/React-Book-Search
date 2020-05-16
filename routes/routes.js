const router = require("express").Router();
const bookController = require("../controller/bookController");

router.route("/api/books")
    .post(bookController.saveBook)

module.exports = router;