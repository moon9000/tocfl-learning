const db = require("../models");
const Word = db.words; //because in controllers/index.js, we have db.words = require("./word.model.js")(sequelize, Sequelize);
const Op = db.Sequelize.Op;

// Create and Save a new Word
exports.create = (req, res) => {};

// Retrieve all Words from the database.
exports.findAll = (req, res) => {
  const { page, size } = req.query;
  console.log("la taille eest" + size);

  const { limit, offset } = getPagination(page, size);

  console.log(limit, offset);

  if (page) {
    Word.findAndCountAll({ limit: limit, offset: offset - 100 }) //add {limit : 20} as a parameter to limit display
      .then((data) => {
        const response = getPagingData(data, page, limit);
        console.log(response);
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Words.",
        });
      });
  } else {
    Word.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Words.",
        });
      });
  }
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
  //const page = req.params.page ? req.params.page : 1;
  const page = req.params.page;

  //Word.findAll({ where: { level: level } })
  const { size } = req.query;
  const { limit, offset } = getPagination(page, size);
  console.log("la taille by level eest" + size);

  console.log("le niveau est:" + level);
  console.log("la page est" + page);

  if (page) {
    Word.findAndCountAll({
      limit: limit,
      offset: offset,
      where: {
        level: level,
      },
    }) //add {limit : 20} as a parameter to limit display
      .then((data) => {
        const response = getPagingData(data, page, limit);
        console.log(response);
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Words.",
        });
      });
  } else {
    Word.findAll({ where: { level: level } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Words.",
        });
      });
  }
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

const getPagination = (page, size) => {
  const limit = size ? +size : 100;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: words } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, words, totalPages, currentPage };
};
