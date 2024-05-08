const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
var express = require("express");
var cors = require("cors");
//const upload = require("express-fileupload");
//const jwt = require("jsonwebtoken");
//const bodyParser = require("body-parser");
//const { JsonWebTokenError } = require("jsonwebtoken");
const findAllWords = require('../src/controllers/word.js')
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));

const options = [
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
];

app.use(options);

//const db = require("../src/db/models");

//db.sequelize.sync();

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

//const port = process.env.PORT || 5000;

/*
var corsOptions = {
  origin: "http://localhost:5000",
};
*/

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

//app.use(upload());

/*
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
*/

//require("../src/db/routes/anime.route")(app); //to use routes related to db models and controllers
//require("../src/db/routes/word.route")(app); //to use routes related to db models and controllers
//require("../src/db/routes/auth.route")(app);
//require("../src/db/routes/user.route")(app);
//require("../src/db/routes/song.route")(app);

app.get('/api/words', async (req, res) => {
  const data = await findAllWords(req, res);
  res.send(data);
})

//app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;