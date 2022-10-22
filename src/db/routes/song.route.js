module.exports = (app) => {
  const songs = require("../controllers/song.controller.js");

  console.log(songs.findAll);
  var router = require("express").Router();

  // Create a new word
  router.post("/", songs.create);

  // Retrieve all songs
  router.get("/", songs.findAll);

  // Retrieve a single word with id
  router.get("/:id", songs.findOne);

  // Retrieve songs related to specific level
  router.get("/level/:level", songs.findByLevel);

  // Retrieve songs related to specific level
  router.get("/year/:year", songs.findByYear);

  // Retrieve songs related to specific type
  router.get("/type/:type", songs.findByType);

  // Update a word with id
  router.put("/:id", songs.update);

  // Delete a word with id
  router.delete("/:id", songs.delete);

  // Delete all songs
  router.delete("/", songs.deleteAll);

  app.use("/api/songs", router);
};
