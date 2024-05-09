import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Table } from "../../components/Table";
import { TableBody } from "../../components/TableBody";
import { TableCell } from "../../components/TableCell";
import { TableHeader } from "../../components/TableHeader";
import { TableRow } from "../../components/TableRow";
import { Select } from "../../components/Select";
import { ButtonBase } from "../../components/Button";
import Pagination from "@mui/material/Pagination";
import cx from "classnames";

export function ListPage() {
  const [words, setWords] = useState([]);
  const [nbPages, setNbPages] = useState();
  const params = new URLSearchParams(window.location.search);
  const currentPage = parseInt(params.get("page")) || 1;
  const [totalItemCount, setTotalItemCount] = useState();
  const [nextPage, setNextPage] = React.useState();

  const wordsWithSentences = words?.filter((word) => word.sentence_ch);

  console.log(currentPage);
  const handleChange = (event, value) => {
    //event.preventDefault();
    event.stopPropagation();
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

  console.log(words);

  //main logic is : changing words state with a filtered words version when choosing a specific level
  //it should directly display number of pages for this specific level

  /*
  const retrieveWordsByLevel = (level) => {
    const params = new URLSearchParams(window.location.search);
    const pageProp = parseInt(params.get("page")) || 1;
    let value = { page: pageProp };

    console.log(params);
    console.log(pageProp);
    console.log(value);

    WordDataService.findByLevel(level, value)
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

  function getSpecificWord(word) {
    WordDataService.findOne(word.id)
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  }
   */
  useEffect(() => {
    //retrieveWordsByLevel(levelChoice);
    (async () => {
      if (words.length === 0) {
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get("page")) || 1;
        let value = { page: page };
        //retrieveAllWords();
        const proxyUrl = `/api/words?page=${page}`;
        const response = await fetch(proxyUrl);
        const words = await response.json()
        console.log('words is :', words);
        if(words?.length){
          const { totalItems, totalPages } = getPagingData(words, page, 100)

          setWords(words);
          setNbPages(totalPages);
          setNbWords(totalItems);
        }
      }
    })();
  }, [words]);

  console.log('nbPages  is :', nbPages);

  console.log('nbWords  is :', nbWords);

  const getPagingData = (data, page, limit) => {
    const totalItems = data.length;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, totalPages, currentPage };
  };

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
    /*
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
      */
    //search only "A2" words and make the words array only containing those words
    //setTypeChoice("All"); //reset type choice because by default, when changing level, everything must be displayed
  }

  const nbSentences = words?.filter(
    (word) => word.sentence_ch !== "" && word.sentence_en !== ""
  );

  const currentLevelNbWords = words.filter(
    (word) => word.level === levelChoice
  );

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
        <p>
          There is {nbWords} words in total{" "}
          {levelChoice && `for the level ${levelChoice}`}
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
              handleChange={(e) => console.log('')}
              options={optionsType}
            />
          </div>
          <div className="flex flex-row space-x-4">
            <form type="submit" onSubmit={(e) => console.log('')}>
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
          {words?.slice(0,100).map((word, index) => {
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
                        onSubmit={(e) => console.log('')}
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
                        onSubmit={(e) => console.log('')}
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
  if(!text || !pattern){
    return null
  }
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
