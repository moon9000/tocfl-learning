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
import { ButtonBase } from "../../components/Button";
//import { Pagination } from "../../components/Pagination";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import cx from "classnames";

export function ListPage() {
  const [words, setWords] = useState([]);
  const [nbPages, setNbPages] = useState();
  const params = new URLSearchParams(window.location.search);
  const currentPage = parseInt(params.get("page")) || 1;
  const [totalItemCount, setTotalItemCount] = useState();
  const [nextPage, setNextPage] = React.useState();

  console.log(words);

  console.log(currentPage);
  const handleChange = (event, value) => {
    console.log(value);
    setNextPage(value);
  };

  const [levelChoice, setLevelChoice] = React.useState("A1");
  const [typeChoice, setTypeChoice] = React.useState("noun");
  const [inputSentenceCh, setInputSentenceCh] = React.useState("");
  const [inputSentenceEn, setInputSentenceEn] = React.useState("");
  const [disabled, setDisabled] = React.useState("");
  const [value, setValue] = React.useState("");
  const [nbWords, setNbWords] = React.useState(0);
  console.log(levelChoice);

  /*
  const retrieveWords = () => {
    WordDataService.findByLevel(levelChoice)
      .then((response) => {
        setWords(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  */

  const retrieveAllWords = () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;
    let value = { page: page };

    WordDataService.getAll(value)
      .then((response) => {
        console.log(response);
        setWords(response.data.words);
        setNbPages(response.data.totalPages);
        setNbWords(response.data.totalItems);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(words);

  const retrieveWordsByLevel = (level) => {
    const params = new URLSearchParams(window.location.search);
    const pageProp = parseInt(params.get("page")) || 1;
    let value = { page: pageProp };

    WordDataService.findByLevel(level, value)
      .then((response) => {
        console.log(response);
        setWords(response.data.words);
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
    // retrieveWordsByLevel(levelChoice);
    retrieveAllWords();
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
    e.target.value === "All"
      ? WordDataService.findAll()
          .then((response) => {
            setWords(response.data);
          })
          .catch((e) => {
            console.log(e);
          })
      : retrieveWordsByLevel(e.target.value);
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
    WordDataService.getAll() //retrive all words for a specific type
      .then((response) => {
        console.log(response);
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
          There is {words ? words.length : "a certain number "}{" "}
          {typeChoice === "All" ? "words" : typeChoice} for{" "}
          {levelChoice === "All" ? "all levels" : `level ${levelChoice}`}
        </p>
        <p>
          {nbSentences ? nbSentences.length : "A certain number"} of those{" "}
          {words ? words.length : null} words have sentences
          {nbSentences && words
            ? ((100 * nbSentences.length) / words.length).toFixed(2)
            : null}{" "}
          %
        </p>
        <p>There is {nbWords} words in total</p>
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
              <button
                disabled={value === ""}
                className={cx(
                  { "bg-grey": value === "", "bg-white": value !== "" },
                  "border border-black"
                )}
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-black border border-1 border-white cursor-pointer">
              <TableCell color="light">Id</TableCell>
              <TableCell color="light">Chinese</TableCell>
              <TableCell color="light">Pinyin</TableCell>
              <TableCell color="light">English</TableCell>
              <TableCell color="light">Type</TableCell>
              <TableCell color="light">Level</TableCell>
              <TableCell color="light">Sentence (chinese)</TableCell>
              <TableCell color="light">Sentence (english)</TableCell>
            </TableRow>
          </TableHeader>
          {words?.map((word, index) => {
            //mettre dans une autre couleur bien visible la partie de sentence_ch et sentence_en qui contiennent pinyin et english
            /*
            const before = word.sentence_ch.substring(
              0,
              word.sentence_ch.indexOf(word.pinyin)
            );
            const sentence_substring = word.sentence_ch.indexOf(word.pinyin);
            */
            //const test = word.sentence_ch.split(word.pinyin);
            //console.log(test);
            // const after = word.sentence_ch.split(word.pinying)[1];
            //console.log(before);
            //  console.log(after);

            //const highlightRegExp = new RegExp(word.chinese, "gi");
            //const delineator = " ";
            //const parts = word.sentence_ch.split(delineator);

            //const indexes = getStartEnd(word.sentence_ch, word.chinese);
            //console.log(indexes);

            return (
              <TableBody key={word.id}>
                <TableRow className={index % 2 === 0 ? "bg-black" : "bg-black"}>
                  <TableCell color="light">{word.id}</TableCell>
                  <TableCell variant="h1" color="light">
                    {word.chinese}
                  </TableCell>

                  <TableCell color="light">{word.pinyin}</TableCell>
                  <TableCell color="light">{word.english}</TableCell>
                  <TableCell color="light">{word.type} </TableCell>
                  <TableCell color="light">{word.level} </TableCell>
                  <TableCell color="light">
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
                          className="text-black"
                          id={`id${word.id}-id`}
                          onChange={(e) => setInputSentenceCh(e.target.value)}
                          placeholder="Add a sentence"
                        />
                        <input
                          className="text-black"
                          type="submit"
                          value="Submit"
                        />
                      </form>
                    ) : (
                      <HighlightPattern
                        text={word.sentence_ch}
                        pattern={word.chinese}
                      />
                    )}
                  </TableCell>
                  <TableCell color="light">
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
                          className="text-black"
                          onChange={(e) => setInputSentenceEn(e.target.value)}
                          placeholder="Add a sentence"
                        />
                        <input
                          className="text-black"
                          type="submit"
                          value="Submit"
                        />
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
        {/*<PaginationControlled nbPages={nbPages} currentPage={currentPage} />
         <Pagination
          currentPageNumber={currentPage}
          itemNumberPerPage={100}
          totalItemCount={totalItemCount}
          pageParameterName="page"
          pageRange={20}
          
        />*/}
        <ButtonBase variant="primary" href={mkHref("page", nextPage)}>
          <Pagination
            count={nbPages}
            page={currentPage}
            siblingCount={0}
            defaultPage={0}
            shape="rounded"
            onChange={handleChange}
          />
        </ButtonBase>
      </div>
    </Router>
  );
}

/*
export default function PaginationControlled({ nbPages, currentPage }) {
  const [page, setPage] = React.useState();
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <ButtonBase variant="primary" href={mkHref("page", page)}>
      <Pagination
        count={nbPages}
        page={page}
        shape="rounded"
        onChange={handleChange}
      />
    </ButtonBase>
  );
}
*/

function mkHref(pageParameterName, pageNumber) {
  const params = new URLSearchParams(window.location.search);
  params.set(pageParameterName, pageNumber);
  return "?" + params;
}

const HighlightPattern = ({ text, pattern }) => {
  const splitText = text.split(pattern);

  if (splitText.length <= 1) {
    return text;
  }

  const matches = text.match(pattern);

  return splitText.reduce(
    (arr, element, index) =>
      matches[index]
        ? [...arr, element, <mark>{matches[index]}</mark>]
        : [...arr, element],
    []
  );
};

/*
const getStartEnd = (str, sub) => [
  str.indexOf(sub),
  str.indexOf(sub) + sub.length - 1,
];
*/
