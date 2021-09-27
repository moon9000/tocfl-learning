const db = require("../models");
const Anime = db.animes; //because in models/index.js, we have db.animes = require("./Anime.model.js")(sequelize, Sequelize);
const Op = db.Sequelize.Op;

// Create and Save a new Anime
exports.create = (req, res) => {};

// Retrieve all Animes from the database.
exports.findAll = (req, res) => {
  Anime.findAll() //add {limit : 20} as a parameter to limit display
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Animes.",
      });
    });
};

// Find a single Anime with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Anime.findAll({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Animes.",
      });
    });
};

// Update a Anime by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.params.data;

  console.log(req);
  Anime.update(req.body, { returning: true, where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Anime was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Anime with id=${id}. Maybe Anime was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Anime with id=" + id,
      });
    });
};

// Delete a Anime with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Animes from the database.
exports.deleteAll = (req, res) => {};

// Find all published Animes
exports.findAllPublished = (req, res) => {};

// Find Animes from a specific level
exports.findByLevel = (req, res) => {
  const level = req.params.level;
  Anime.findAll({ where: { level: level } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Animes.",
      });
    });
};

// Find Animes from a specific year
exports.findByYear = (req, res) => {
  const year = req.params.year;
  Anime.findAll({ where: { year: year } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Animes.",
      });
    });
};

// Find Animes from a specific type
exports.findByType = (req, res) => {
  const type = req.params.type;
  Anime.findAll({ where: { type: type } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Animes.",
      });
    });
};
