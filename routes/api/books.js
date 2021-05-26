const express = require("express");
const router = express.Router();

// Load Book model
const Book = require("../../models/Book");

// path api/books
// all books
router.get("/", (req, res) => {
  Book.find()
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ nobooksfound: "No Books found" }));
});

module.exports = router;
