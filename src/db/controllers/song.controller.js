const db = require("../models");
const Song = db.songs; //because in models/index.js, we have db.songs = require("./Song.model.js")(sequelize, Sequelize);
const Op = db.Sequelize.Op;

// Create and Save a new Song
exports.create = (req, res) => {};

// Retrieve all songs from the database.
exports.findAll = (req, res) => {
  Song.findAll() //add {limit : 20} as a parameter to limit display
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving songs.",
      });
    });
};

// Find a single Song with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Song.findAll({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving songs.",
      });
    });
};

// Update a Song by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.params.data;

  console.log(req);
  Song.update(req.body, { returning: true, where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Song was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Song with id=${id}. Maybe Song was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Song with id=" + id,
      });
    });
};

// Delete a Song with the specified id in the request
exports.delete = (req, res) => {};

// Delete all songs from the database.
exports.deleteAll = (req, res) => {};

// Find all published songs
exports.findAllPublished = (req, res) => {};

// Find songs from a specific level
exports.findByLevel = (req, res) => {
  const level = req.params.level;
  Song.findAll({ where: { level: level } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving songs.",
      });
    });
};

// Find songs from a specific year
exports.findByYear = (req, res) => {
  const year = req.params.year;
  Song.findAll({ where: { year: year } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving songs.",
      });
    });
};

// Find songs from a specific type
exports.findByType = (req, res) => {
  const type = req.params.type;
  Song.findAll({ where: { type: type } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving songs.",
      });
    });
};
