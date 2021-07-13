module.exports = (app) => {
  const words = require("../controllers/word.controller.js");

  console.log(words.findAll);
  var router = require("express").Router();

  // Create a new word
  router.post("/", words.create);

  // Retrieve all words
  router.get("/", words.findAll);

  // Retrieve a single word with id
  router.get("/:id", words.findOne);

  // Update a word with id
  router.put("/:id", words.update);

  // Delete a word with id
  router.delete("/:id", words.delete);

  // Delete all words
  router.delete("/", words.deleteAll);

  app.use("/api/words", router);
};
