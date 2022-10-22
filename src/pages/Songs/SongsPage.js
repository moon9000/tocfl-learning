import React, { useState, useEffect } from "react";
import SongDataService from "../../db/services/song.service";
import { BrowserRouter as Router } from "react-router-dom";
import { Table } from "../../components/Table";
import { TableBody } from "../../components/TableBody";
import { TableCell } from "../../components/TableCell";
import { TableHeader } from "../../components/TableHeader";
import { TableRow } from "../../components/TableRow";
import { Select } from "../../components/Select";
import { Pagination } from "../../components/Pagination";

export function Songs() {
  const [songs, setSongs] = useState([]);

  const [levelChoice, setLevelChoice] = React.useState("A1");
  const [typeChoice, setTypeChoice] = React.useState("noun");
  const [inputSentenceCh, setInputSentenceCh] = React.useState("");
  const [inputSentenceEn, setInputSentenceEn] = React.useState("");
  const [value, setValue] = React.useState("");

  console.log(songs);

  const retrievesongs = () => {
    SongDataService.findByLevel(levelChoice)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveAllsongs = () => {
    SongDataService.findAll()
      .then((response) => {
        setSongs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrievesongsByLevel = (level) => {
    SongDataService.findByLevel(level)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function getSpecificsong(song) {
    SongDataService.findOne(song.id)
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    retrieveAllsongs();
  }, []);

  const optionsLevel = [
    { value: "All" },
    { value: "A1" },
    { value: "A2" },
    { value: "B1" },
    { value: "B2" },
  ];

  const optionsType = [
    { value: "All" },
    { value: "noun" },
    { value: "verb" },
    { value: "adjective" },
    { value: "adverb" },
    { value: "conjonction" },
  ];

  function handleChangeLevel(e) {
    setLevelChoice(e.target.value); //make "A2" the new levelChoice
    {
      e.target.value === "All"
        ? SongDataService.findAll()
            .then((response) => {
              setSongs(response.data);
            })
            .catch((e) => {
              console.log(e);
            })
        : retrievesongsByLevel(e.target.value);
    }
    //search only "A2" songs and make the songs array only containing those songs
    //setTypeChoice("All"); //reset type choice because by default, when changing level, everything must be displayed
  }

  function handleChangeType(e) {
    setTypeChoice(e.target.value); //make "verb" the new typeChoice

    e.target.value === "All" && levelChoice !== "All"
      ? SongDataService.findByLevel(levelChoice)
          .then((response) => {
            let filteredsongs = response.data.filter(
              (song) => song.level === levelChoice //search songs that matches both the levelChoice and the typeChoice
            );
            setSongs(filteredsongs);
          })
          .catch((e) => {
            console.log(e);
          })
      : e.target.value !== "All" && levelChoice === "All"
      ? SongDataService.findAll() //retrive all songs for a specific type
          .then((response) => {
            let filteredsongs = response.data.filter(
              (song) => song.type === e.target.value //search songs that matches both the levelChoice and the typeChoice
            );
            setSongs(filteredsongs);
          })
          .catch((e) => {
            console.log(e);
          })
      : SongDataService.findAll()
          .then((response) => {
            setSongs(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
  }

  function handleSubmitCh(song, e) {
    e.preventDefault();
    SongDataService.update(song.id, { sentence_ch: inputSentenceCh })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  //when changing level, the default option for the type select must be reset to "All"

  function handleSubmitEn(song, e) {
    e.preventDefault();
    SongDataService.update(song.id, { sentence_eng: inputSentenceEn })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  const nbSentences = songs?.filter(
    (song) => song.sentence_ch !== "" && song.sentence_en !== ""
  );

  const handleSearch = async (e) => {
    e.preventDefault();
    SongDataService.findAll() //retrive all songs for a specific type
      .then((response) => {
        let filteredsongs = response.data.filter(
          (song) => song.chinese.includes(value) //search songs that matches both the levelChoice and the typeChoice
        );
        setSongs(filteredsongs);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Router>
      <div className="Songs">
        <h1>Here is the current TOCFL Vocabulary Songs :</h1>
        <p>
          There is {songs.length} {typeChoice === "All" ? "songs" : typeChoice}{" "}
          for {levelChoice === "All" ? "all levels" : `level ${levelChoice}`}
        </p>
        <p>
          {nbSentences.length} of those {songs.length} songs have sentences (
          {((100 * nbSentences.length) / songs.length).toFixed(2)} %)
        </p>
        <div className="flex flex-row">
          <div>
            <Select
              name="level"
              handleChange={handleChangeLevel}
              options={optionsLevel}
            />
            <Select
              name="type"
              handleChange={handleChangeType}
              options={optionsType}
            />
          </div>
          <div className="flex flex-row space-x-4">
            <form type="submit" onSubmit={handleSearch}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                className="border border-black"
              />
              <button className="bg-white border border-black" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-black border border-1 border-white cursor-pointer">
              <TableCell color="light">Id</TableCell>
              <TableCell color="light">Chinese Title</TableCell>
              <TableCell color="light">English Title</TableCell>
              <TableCell color="light">Artist</TableCell>
              <TableCell color="light">Year</TableCell>
              <TableCell color="light">Chinese Lyrics</TableCell>
              <TableCell color="light">English Lyrics</TableCell>
            </TableRow>
          </TableHeader>
          {songs?.map((song, index) => {
            return (
              <TableBody key={song.id}>
                <TableRow className={index % 2 === 0 ? "bg-black" : "bg-black"}>
                  <TableCell color="light">{song.id}</TableCell>
                  <TableCell color="light">{song.chTitle}</TableCell>
                  <TableCell color="light">{song.enTitle}</TableCell>
                  <TableCell color="light">{song.artist} </TableCell>
                  <TableCell color="light">{song.year} </TableCell>
                  <TableCell color="light">{song.chLyrics} </TableCell>
                  <TableCell color="light">{song.enLyrics} </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
        <Pagination
          currentPageNumber={1}
          itemNumberPerPage={20}
          totalItemCount={200}
          pageParameterName="page"
          pageRange={2}
        />
      </div>
    </Router>
  );
}
