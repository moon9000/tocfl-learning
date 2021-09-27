module.exports = (app) => {
  const animes = require("../controllers/anime.controller.js");

  console.log(animes.findAll);
  var router = require("express").Router();

  // Create a new word
  router.post("/", animes.create);

  // Retrieve all animes
  router.get("/", animes.findAll);

  // Retrieve a single word with id
  router.get("/:id", animes.findOne);

  // Retrieve animes related to specific level
  router.get("/level/:level", animes.findByLevel);

  // Retrieve animes related to specific level
  router.get("/year/:year", animes.findByYear);

  // Retrieve animes related to specific type
  router.get("/type/:type", animes.findByType);

  // Update a word with id
  router.put("/:id", animes.update);

  // Delete a word with id
  router.delete("/:id", animes.delete);

  // Delete all animes
  router.delete("/", animes.deleteAll);

  app.use("/api/animes", router);
};
