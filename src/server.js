const express = require("express");
const upload = require("express-fileupload")

const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload())

app.post('/ln', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;

    file.mv(`${__dirname}/pages/LN/data/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `data/${file.name}` });
    });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
