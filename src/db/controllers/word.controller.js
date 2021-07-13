const db = require("../models");
const Word = db.words; //because in controllers/index.js, we have db.words = require("./word.model.js")(sequelize, Sequelize);
const Op = db.Sequelize.Op;

// Create and Save a new Word
exports.create = (req, res) => {};

// Retrieve all Words from the database.
exports.findAll = (req, res) => {
  Word.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Word with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Word.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Word by the id in the request
exports.update = (req, res) => {};

// Delete a Word with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Words from the database.
exports.deleteAll = (req, res) => {};

// Find all published Words
exports.findAllPublished = (req, res) => {};
