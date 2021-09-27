const express = require("express");
var cors = require("cors");
const upload = require("express-fileupload");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { JsonWebTokenError } = require("jsonwebtoken");

const app = express();

const db = require("./db/models");
db.sequelize.sync();

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const port = process.env.PORT || 5000;

/*
var corsOptions = {
  origin: "http://localhost:5000",
};
*/
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

app.use(upload());

app.post("/ln", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/pages/LN/data/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `data/${file.name}` });
  });
});

require("./db/routes/anime.route")(app); //to use routes related to db models and controllers
require("./db/routes/word.route")(app); //to use routes related to db models and controllers

app.listen(port, () => console.log(`Listening on port ${port}`));
