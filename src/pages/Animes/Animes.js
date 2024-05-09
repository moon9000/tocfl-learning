import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Table } from "../../components/Table";
import { TableBody } from "../../components/TableBody";
import { TableCell } from "../../components/TableCell";
import { TableHeader } from "../../components/TableHeader";
import { TableRow } from "../../components/TableRow";
import { Pagination } from "../../components/Pagination";

export function Animes() {
  const [animes, setAnimes] = useState([]);
  const [value, setValue] = React.useState("");

  const retrieveAnimesByYear = (level) => {
    /*
    AnimeDataService.findByYear(level)
      .then((response) => {
        console.log(response);
        setAnimes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
     */
  };

  useEffect(() => {
    retrieveAnimesByYear("2000");
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    /*
    AnimeDataService.findAll() //retrive all animes for a specific type
      .then((response) => {
        let filteredanimes = response.data.filter(
          (anime) =>
            anime.englishTitle.includes(value) || anime.year.includes(value) //search animes that matches both the levelChoice and the typeChoice
        );
        setAnimes(filteredanimes);
      })
      .catch((e) => {
        console.log(e);
      });
     */
  };

  return (
    <Router>
      <div className="List">
        <h1>Here is all completed TV animes from 1961 to 2020</h1>
        <p>There are {animes.length} completed TV animes from 1961 to 2020</p>
        <div className="flex flex-row">
          <div className="flex flex-row p-4 space-x-4">
            <div>Search an anime or a year :</div>
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
              <TableCell color="dark">Poster Image</TableCell>
              <TableCell color="dark">English Title</TableCell>
              <TableCell color="dark">JP Title</TableCell>
              <TableCell color="dark">Start Date</TableCell>
              <TableCell color="dark">End Date</TableCell>
              <TableCell color="dark">Year</TableCell>
              <TableCell color="dark">Episode count</TableCell>
            </TableRow>
          </TableHeader>
          {animes?.map((anime, index) => {
            return (
              <TableBody key={anime.id}>
                <TableRow
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <TableCell color="dark">{anime.id}</TableCell>
                  <TableCell color="dark">
                    <img src={anime.posterImage} alt="anime_cover" />
                  </TableCell>
                  <TableCell color="dark">{anime.englishTitle}</TableCell>
                  <TableCell color="dark">{anime.japaneseTitle}</TableCell>
                  <TableCell color="dark">{anime.startDate} </TableCell>
                  <TableCell color="dark">{anime.endDate} </TableCell>
                  <TableCell color="dark">{anime.year} </TableCell>
                  <TableCell color="dark">{anime.episodeCount} </TableCell>
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
