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
import { optionsLevel } from "./constants";
import { getPagingData } from "./utils";
import { CircularProgress } from "@mui/material";

export function ListPage() {
  const [words, setWords] = useState([]);
  const [initialWords, setInitialWords] = useState([]);
  const [nbPages, setNbPages] = useState();
  const [nextPage, setNextPage] = useState();
  const [levelChoice, setLevelChoice] = useState("");
  const [inputSentenceCh, setInputSentenceCh] = useState("");
  const [inputSentenceEn, setInputSentenceEn] = useState("");
  const [disabled, setDisabled] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [nbWords, setNbWords] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const currentPage = parseInt(params.get("page")) || 1;
  const page = parseInt(params.get("page")) || 1;
  const nbSentences = words?.filter(
    (word) => word.sentence_ch !== null && word.sentence_en !== null
  );

  useEffect(() => {
    (async () => {
      if (words.length === 0 && !levelChoice) {
        setIsLoading(true);
        const proxyUrl = `/api/words?page=${page}`;
        const response = await fetch(proxyUrl);
        const words = await response.json();
        if (words?.length) {
          const { totalItems, totalPages } = getPagingData(words, page, 100);
          setWords(words);
          setInitialWords(words);
          setNbPages(totalPages);
          setNbWords(totalItems);
        }
        setIsLoading(false);
      }
    })();
  }, [words]);

  const handleChangePage = (event, value) => {
    event.stopPropagation();
    setNextPage(value);
  };

  const handleChangeLevel = (e) => {
    const selectedLevel = e.target.value;
    const isSelectedLevelAll =
      selectedLevel === "All" || selectedLevel === "Choose a level :";
    setLevelChoice(selectedLevel);

    if (isSelectedLevelAll) {
      const { totalItems, totalPages } = getPagingData(initialWords, page, 100);
      setWords(initialWords);
      setNbPages(totalPages);
      setNbWords(totalItems);
      return;
    }
    const filteredWords = initialWords.filter(
      (word) => word.level === selectedLevel
    );
    const { totalItems, totalPages } = getPagingData(filteredWords, page, 100);
    setWords(filteredWords);
    setNbPages(totalPages);
    setNbWords(totalItems);
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    const searchWords = initialWords.filter((word) =>
      word.chinese.includes(searchedValue)
    );
    if (searchWords.length > 0) {
      setWords(searchWords);
    }
  };

  const handleChangeSearchedValue = (e) => {
    setSearchedValue(e.target.value);
    if (e.target.value === "") {
      setWords(initialWords);
    }
  };

  return (
    <Router>
      <div className="py-8  bg-lightDark text-white text-center">
        <h2>Here is the current TOCFL Vocabulary List :</h2>
        {!isLoading && (
          <>
            <p>There are {words.length} words</p>
            <p>
              {nbSentences ? nbSentences.length : "A certain number"} of those{" "}
              {words ? words.length : null} words have sentences (
              {nbSentences && words
                ? ((100 * nbSentences.length) / words.length).toFixed(2)
                : null}{" "}
              %)
            </p>
            <div className="flex flex-row items-center justify-center pb-8 text-lightDark">
              <div>
                <Select
                  name="level"
                  handleChange={handleChangeLevel}
                  options={optionsLevel}
                />
              </div>
              <div className="flex flex-row space-x-4">
                <form type="submit" onSubmit={handleSubmitSearch}>
                  <input
                    value={searchedValue}
                    onChange={(e) => handleChangeSearchedValue(e)}
                    type="text"
                    className="border border-black"
                  />
                  <button
                    className={cx(
                      {
                        "bg-grey": searchedValue === "",
                        "bg-white": searchedValue !== "",
                      },
                      "border border-black"
                    )}
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
        {!isLoading && (
          <ButtonBase variant="primary" href={mkHref("page", nextPage)}>
            <Pagination
              count={nbPages}
              page={currentPage}
              siblingCount={0}
              defaultPage={0}
              shape="rounded"
              onChange={handleChangePage}
            />
          </ButtonBase>
        )}
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-black border border-1 border-white cursor-pointer">
                <TableCell color="light">Id</TableCell>
                <TableCell color="light">Chinese</TableCell>
                <TableCell color="light">Pinyin</TableCell>
                <TableCell color="light">English</TableCell>
                <TableCell color="light">Level</TableCell>
                <TableCell color="light">Sentence (chinese)</TableCell>
                <TableCell color="light">Sentence (english)</TableCell>
              </TableRow>
            </TableHeader>
            {words?.slice(0, 100).map((word, index) => {
              return (
                <TableBody key={word.id}>
                  <TableRow
                    className={index % 2 === 0 ? "bg-black" : "bg-black"}
                  >
                    <TableCell color="light">{word.id}</TableCell>
                    <TableCell variant="h1" color="light">
                      {word.chinese}
                    </TableCell>

                    <TableCell color="light">{word.pinyin}</TableCell>
                    <TableCell color="light">{word.english}</TableCell>
                    <TableCell color="light">{word.level} </TableCell>
                    <TableCell color="light">
                      {word.sentence_ch === "" ? (
                        <form
                          id={`id${word.id}`}
                          name={word.pinyin}
                          className="flex flex-row space-x-2"
                          method="post"
                          onSubmit={(e) => console.log("")}
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
                          onSubmit={(e) => console.log("")}
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
        )}
        {!isLoading && (
          <ButtonBase variant="primary" href={mkHref("page", nextPage)}>
            <Pagination
              count={nbPages}
              page={currentPage}
              siblingCount={0}
              defaultPage={0}
              shape="rounded"
              onChange={handleChangePage}
            />
          </ButtonBase>
        )}
      </div>
    </Router>
  );
}

function mkHref(pageParameterName, pageNumber) {
  const params = new URLSearchParams(window.location.search);
  params.set(pageParameterName, pageNumber);
  return "?" + params;
}

const HighlightPattern = ({ text, pattern }) => {
  if (!text || !pattern) {
    return null;
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
