const db = require("../models");
const Word = db.words; //because in controllers/index.js, we have db.words = require("./word.model.js")(sequelize, Sequelize);
const Op = db.Sequelize.Op;

// Create and Save a new Word
exports.create = (req, res) => {};

// Retrieve all Words from the database.
exports.findAll = (req, res) => {
  Word.findAll() //add {limit : 20} as a parameter to limit display
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Words.",
      });
    });
};

// Find a single Word with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Word.findAll({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Words.",
      });
    });
};

// Update a Word by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.params.data;

  console.log(req);
  Word.update(req.body, { returning: true, where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Word was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Word with id=${id}. Maybe Word was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Word with id=" + id,
      });
    });
};

// Delete a Word with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Words from the database.
exports.deleteAll = (req, res) => {};

// Find all published Words
exports.findAllPublished = (req, res) => {};

// Find words from a specific level
exports.findByLevel = (req, res) => {
  const level = req.params.level;
  Word.findAll({ where: { level: level } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Words.",
      });
    });
};

// Find words from a specific type
exports.findByType = (req, res) => {
  const type = req.params.type;
  Word.findAll({ where: { type: type } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Words.",
      });
    });
};
