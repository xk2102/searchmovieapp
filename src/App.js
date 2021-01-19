//added a comment on the branch

import './App.css';
import React, { useState } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  
  const [searchTerm, setSearchTerm] = useState("star wars");
  const [movies, setMovies] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    var url = `https://www.omdbapi.com/?apikey=af51510a&s=${searchTerm}`;
    var response = await fetch(url);
    var jsonData = await response.json();
    // console.log(jsonData);

    async function getMovies(id) {
      var url = `https://www.omdbapi.com/?apikey=af51510a&i=${id}&plot=short`;
      var response = await fetch(url);
      var jsonData = await response.json();
      return jsonData;
    }

    if (jsonData.Response === "True") {
      const listOfImdbIDs = jsonData.Search.map((d) => d.imdbID);

      const listOfMovies = await Promise.all(
        listOfImdbIDs.map((imdbID) => getMovies(imdbID))
      );
      console.log(listOfMovies);
      setMovies(listOfMovies);

    } else {
      console.log(jsonData.Error);
      alert(jsonData.Error);
      setMovies([]);
    }
  } //handleSubmit

  return (
    <div className="container">

      <div className="header"><span>MOVIE SEARCH APP</span></div>

      <form id="searchForm" onSubmit={handleSubmit}>
        <input id="searchInput" placeholder="give me keywords.."
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <button id="searchButton">Search</button>
      </form>

      {movies.length > 0 && (
        <div>
          {movies.length === 1 ? <p>Found 1 result:</p> : <p>Found {movies.length} results: </p>}
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      )}


    </div>
  );
}

export default App;
