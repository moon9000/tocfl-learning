module.exports = (app) => {
  const words = require("../controllers/word.controller.js");
  var router = require("express").Router();
  console.log(router);

  // Create a new word
  router.post("/", words.create);

  // Retrieve all words
  router.get("/", words.findAll);

  // Retrieve a single word with id
  router.get("/:id", words.findOne);

  // Retrieve words related to specific level
  router.get("/level/:level", words.findByLevel);

  // Retrieve words related to specific type
  router.get("/type/:type", words.findByType);

  // Update a word with id
  router.put("/:id", words.update);

  // Delete a word with id
  router.delete("/:id", words.delete);

  // Delete all words
  router.delete("/", words.deleteAll);

  app.use("/api/words", router);
};
