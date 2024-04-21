const db = require("../models");
const Word = db.words; //because in controllers/index.js, we have db.words = require("./word.model.js")(sequelize, Sequelize);
const Op = db.Sequelize.Op;

// Create and Save a new Word
exports.create = (req, res) => {};

// Retrieve all Words from the database.
exports.findAll = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

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
  //what works for now : if you are on a given page, for example page=3
  //then you can filter and get the filtered works for the level, for THIS PAGE only
  //so, you need to first select the page, then select the level.
  //this is caused by the Pagination component reloading the whole /words from 0.
  //and thus, it starts with words = [], thus is launches the useEffect initializing words with all words.

  //the solution could be to add as a req.params the level in the url.
  //ie : words?page=3&level=A2

  const level = req.params.level;
  //const page = req.params.page ? req.params.page : 1;
  //Word.findAll({ where: { level: level } })
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  console.log(size);
  console.log(limit);
  console.log(offset);

  console.log("la taille by level eest" + size);

  console.log("le niveau est:" + level);
  console.log("la page est" + page);

  if (page) {
    Word.findAndCountAll({
      limit: limit,
      offset: offset - 100,
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
