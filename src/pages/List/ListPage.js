import React, { useState, useEffect } from "react";
import WordDataService from "../../db/services/word.service";
import Word from "../../db/models/word.model";
import { BrowserRouter as Router } from "react-router-dom";
import { Table } from "../../components/Table";
import { TableBody } from "../../components/TableBody";
import { TableCell } from "../../components/TableCell";
import { TableHeader } from "../../components/TableHeader";
import { TableRow } from "../../components/TableRow";
import { Select } from "../../components/Select";
import { Pagination } from "../../components/Pagination";

export function ListPage() {
  const [words, setWords] = useState([]);

  const [levelChoice, setLevelChoice] = React.useState("A1");
  const [typeChoice, setTypeChoice] = React.useState("noun");
  const [inputSentenceCh, setInputSentenceCh] = React.useState("");
  const [inputSentenceEn, setInputSentenceEn] = React.useState("");
  const [value, setValue] = React.useState("");

  const retrieveWords = () => {
    WordDataService.findByLevel(levelChoice)
      .then((response) => {
        setWords(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveAllWords = () => {
    WordDataService.findAll()
      .then((response) => {
        setWords(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveWordsByLevel = (level) => {
    WordDataService.findByLevel(level)
      .then((response) => {
        setWords(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function getSpecificWord(word) {
    WordDataService.findOne(word.id)
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    retrieveWordsByLevel("A1");
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
        ? WordDataService.findAll()
            .then((response) => {
              setWords(response.data);
            })
            .catch((e) => {
              console.log(e);
            })
        : retrieveWordsByLevel(e.target.value);
    }
    //search only "A2" words and make the words array only containing those words
    //setTypeChoice("All"); //reset type choice because by default, when changing level, everything must be displayed
  }

  function handleChangeType(e) {
    setTypeChoice(e.target.value); //make "verb" the new typeChoice

    e.target.value === "All" && levelChoice !== "All"
      ? WordDataService.findByLevel(levelChoice)
          .then((response) => {
            let filteredWords = response.data.filter(
              (word) => word.level === levelChoice //search words that matches both the levelChoice and the typeChoice
            );
            setWords(filteredWords);
          })
          .catch((e) => {
            console.log(e);
          })
      : e.target.value !== "All" && levelChoice === "All"
      ? WordDataService.findAll() //retrive all words for a specific type
          .then((response) => {
            let filteredWords = response.data.filter(
              (word) => word.type === e.target.value //search words that matches both the levelChoice and the typeChoice
            );
            setWords(filteredWords);
          })
          .catch((e) => {
            console.log(e);
          })
      : WordDataService.findAll()
          .then((response) => {
            setWords(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
  }

  function handleSubmitCh(word, e) {
    e.preventDefault();
    WordDataService.update(word.id, { sentence_ch: inputSentenceCh })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  //when changing level, the default option for the type select must be reset to "All"

  function handleSubmitEn(word, e) {
    e.preventDefault();
    WordDataService.update(word.id, { sentence_eng: inputSentenceEn })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  const nbSentences = words?.filter(
    (word) => word.sentence_ch !== "" && word.sentence_en !== ""
  );

  const handleSearch = async (e) => {
    e.preventDefault();
    WordDataService.findAll() //retrive all words for a specific type
      .then((response) => {
        let filteredWords = response.data.filter(
          (word) => word.chinese.includes(value) //search words that matches both the levelChoice and the typeChoice
        );
        setWords(filteredWords);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Router>
      <div className="List">
        <h1>Here is the current TOCFL Vocabulary List :</h1>
        <p>
          There is {words.length} {typeChoice === "All" ? "words" : typeChoice}{" "}
          for {levelChoice === "All" ? "all levels" : `level ${levelChoice}`}
        </p>
        <p>
          {nbSentences.length} of those {words.length} words have sentences (
          {((100 * nbSentences.length) / words.length).toFixed(2)} %)
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
            <TableRow className="border border-1 border-black cursor-pointer">
              <TableCell color="dark">Id</TableCell>
              <TableCell color="dark">Chinese</TableCell>
              <TableCell color="dark">Pinyin</TableCell>
              <TableCell color="dark">English</TableCell>
              <TableCell color="dark">Type</TableCell>
              <TableCell color="dark">Level</TableCell>
              <TableCell color="dark">Sentence (chinese)</TableCell>
              <TableCell color="dark">Sentence (english)</TableCell>
            </TableRow>
          </TableHeader>
          {words?.map((word, index) => {
            return (
              <TableBody key={word.id}>
                <TableRow
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <TableCell color="dark">{word.id}</TableCell>
                  <TableCell variant="h1" color="dark">
                    {word.chinese}
                  </TableCell>

                  <TableCell color="dark">{word.pinyin}</TableCell>
                  <TableCell color="dark">{word.english}</TableCell>
                  <TableCell color="dark">{word.type} </TableCell>
                  <TableCell color="dark">{word.level} </TableCell>
                  <TableCell color="dark">
                    {word.sentence_ch === "" ? (
                      <form
                        id={`id${word.id}`}
                        name={word.pinyin}
                        className="flex flex-row space-x-2"
                        method="post"
                        onSubmit={(e) => handleSubmitCh(word, e)}
                      >
                        <input
                          type="text"
                          id={`id${word.id}-id`}
                          onChange={(e) => setInputSentenceCh(e.target.value)}
                          placeholder="Add a sentence"
                        />
                        <input type="submit" value="Submit" />
                      </form>
                    ) : (
                      word.sentence_ch
                    )}
                  </TableCell>
                  <TableCell color="dark">
                    {word.sentence_eng === "" ? (
                      <form
                        id={`id${word.id}En`}
                        name="englishForm"
                        className="flex flex-row space-x-2"
                        method="post"
                        onSubmit={(e) => handleSubmitEn(word, e)}
                      >
                        <input
                          type="text"
                          id={`id${word.id}En-id`}
                          onChange={(e) => setInputSentenceEn(e.target.value)}
                          placeholder="Add a sentence"
                        />
                        <input type="submit" value="Submit" />
                      </form>
                    ) : (
                      word.sentence_eng
                    )}
                  </TableCell>
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
