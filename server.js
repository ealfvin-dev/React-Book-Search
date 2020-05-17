const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname + "/build")));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksDB").catch((err) => {
    console.log(err);
})

app.listen(PORT, function() {
    console.log(`Server now listening on PORT ${PORT}!`);
})