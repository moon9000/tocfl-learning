import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

export function LnPage() {
  let [userFile, setUserFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [wrongFormat, setWrongFormat] = useState(false);
  const [message, setMessage] = useState(null);

  function handleFileChange(e) {
    setUserFile(e.target.files[0]);
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    if (userFile.type !== "application/epub+zip") {
      setWrongFormat(true);
      return null;
    }

    setWrongFormat(false);
    const formData = new FormData();
    formData.append("file", userFile);
    //allows server.js to get req.files.file.
    //if formData.append('epub'), it would allow server.js to get req.files.epub

    try {
      const res = await axios.post("/ln", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  }

  return (
    <Router>
      <div className="Home">
        <h1>Traditional Chinese Light Novel Parser</h1>
        <h2>
          You can add a Light Novel in EPUB format and obtain a parsed json file
        </h2>
        <p>
          Each sentences of the light novel that contains a word that you need
          to learn for the TOCFL Exam will be kept
        </p>
      </div>

      <div>
        <h1>Please add your EPUB file here : </h1>
        <form onSubmit={onFormSubmit}>
          <div className="flex items-center text-center flex-col space-y-4">
            <input type="file" onChange={(e) => handleFileChange(e)} />
            <input
              type="submit"
              value="Upload"
              className="btn btn-primary btn-block mt-4"
            />
          </div>
        </form>

        <div>
          {wrongFormat ? (
            <div>
              <p>
                You need to upload an EPUB file. Please select another file.
              </p>
            </div>
          ) : null}
        </div>
        {!wrongFormat && uploadedFile ? (
          <div className="py-4">
            <h3>Your epub ({uploadedFile.fileName}) has been uploaded</h3>
          </div>
        ) : null}
        {message ? <div>{message}</div> : null}
      </div>
    </Router>
  );
}
