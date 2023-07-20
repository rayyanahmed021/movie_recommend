import React, { useEffect, useState } from "react";
import Result from "./result";
// import axios from "axios";
// // import * as jpickle from "jpickle";
// // // const fs = require('fs')
// // import * as fs from "fs"

// export default function SearchMovies() {
//   fetch('/data', {
//       method: 'GET'
//     })
//       .then(response => console.log(response))
//       .then(data => console.log(data))
//       return "<div>asdad</div>"
// //   useEffect(() => {
// //     // Using fetch to fetch the api from
// //     // flask server it will be redirected to proxy
// //     fetch("/data").then((res) =>
// //         res.json().then((data) => {
// //             // Setting a data from api
// //             setdata({
// //                 name: data.Name,
// //                 age: data.Age,
// //                 date: data.Date,
// //                 programming: data.programming,
// //             });
// //         })
// //     );
// // }, []);

//   // const fetchMovies = async () => {
//   //   const res = await axios.get("http://localhost:5000/");
//   //   const data = res.data;
//   //   console.log(data)
//   // }  
//   // fetchMovies()
//       // .then(data => {
//       //   console.log(data)
//       //   return data
//       // })
//   // const [query, setQuery] = useState("");
//   // const [movies, setMovies] = useState([]);
//   // const [recommendedMovies, setRecommendedMovies] = useState([]);
//   // const [showRecommendations, setShowRecommendations] = useState(false);

//   // const APIURL =
//   //   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&page=1";
//   // const SEARCHAPI =
//   //   "https://api.themoviedb.org/3/search/movie?&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&query=";

//   // const fetchMovies = async (query) => {
//   //   // console.log(query)
//   //   try {
//   //     let url = APIURL;
//   //     if (query) {
//   //       url = SEARCHAPI + query;
//   //     }
//   //     // const res = await axios.get(url);
//   //     const res = await axios.get("http://127.0.0.1:5000/");
//   //     const data = res.data;
//   //     console.log(data)
//   //     // setMovies(data.results);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   // const fetchPoster = async (movieId) => {
//   //   try {
//   //     const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&language=en-US`;
//   //     console.log("fetch poster")
//   //     const response = await axios.get(url);
//   //     const data = response.data;
//   //     const posterPath = data.poster_path;
//   //     const fullPath = "https://image.tmdb.org/t/p/w500/" + posterPath;
//   //     return fullPath;
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const recommendMovies = async (selectedMovie) => {
//   //   try {
//   //     const response = await axios.get("/movies_dict.pkl");
//   //     const moviesDict = response.data;
//   //     // const selectedMovieData = moviesDict[selectedMovie];
//   //     const index = moviesDict.findIndex((item) => item.title === selectedMovie);
//   //     console.log(index)
//   //     // console.log(moviesDict)
//   //     const selectedMovieData = moviesDict
//   //     // console.log(selectedMovieData)
//   //     if (selectedMovieData) {
//   //       const similarityResponse = await axios.get("/similarity.pkl");
//   //       const similarityMatrix = similarityResponse.data;
//   //       // console.log(similarityMatrix)
//   //       const selectedMovieIndex = movies.findIndex(
//   //         (movie) => movie.title === selectedMovie
//   //       );
//   //       console.log(selectedMovieIndex)
//   //       const similarityScores = similarityMatrix[selectedMovieIndex];
//   //       const recommendedMovieIndices = similarityScores
//   //         .map((score, index) => ({ score, index }))
//   //         .sort((a, b) => b.score - a.score)
//   //         .slice(1, 6)
//   //         .map((item) => item.index);

//   //       const recommendedMovies = [];

//   //       for (const movieIndex of recommendedMovieIndices) {
//   //         const movie = movies[movieIndex];
//   //         const posterUrl = await fetchPoster(movie.movie_id);
//   //         recommendedMovies.push({ title: movie.title, posterUrl });
//   //       }

//   //       setRecommendedMovies(recommendedMovies);
//   //       // console.log(recommendedMovies)
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // // useEffect(() => {
//   // //   setMovies([]);
//   // //   if (query === "") {
//   // //     fetchMovies();
//   // //   } else {
//   // //     fetchMovies();
//   // //     recommendMovies(query);
//   // //   }
//   // // }, [query, fetchMovies, recommendMovies]); // Add fetchMovies and recommendMovies to the dependency array

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   fetchMovies(query);
//   // };

//   // const handleRecommend = () => {
//   //   setShowRecommendations(true);
//   //   recommendMovies(query);
//   // };

//   // return (
//   //   <div>
//   //     <h1 className="title">React Movie Search</h1>
//   //     <form className="form" onSubmit={handleSubmit}>
//   //       <input
//   //         type="text"
//   //         className="input"
//   //         placeholder="Search movies..."
//   //         value={query}
//   //         onChange={(e) => setQuery(e.target.value)}
//   //       />
//   //       <button type="submit" className="button">
//   //         Search
//   //       </button>
//   //     </form>
//   //     <div className="button-container">
//   //       <button className="button" onClick={handleRecommend}>
//   //         Recommend
//   //       </button>
//   //     </div>
//   //     <Result movies={movies} />
//   //     {showRecommendations && (
//   //       <div>
//   //         <h2>Recommended Movies</h2>
//   //         {recommendedMovies.length > 0 ? (
//   //           <Result movies={recommendedMovies} />
//   //         ) : (
//   //           <p>No recommendations found for {query}.</p>
//   //         )}
//   //       </div>
//   //     )}
//   //   </div>
//   // );
  
// }

// import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&page=1";
  const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&query=";


  // fetch('http://127.0.0.1:5000/data?movie=Pan', {
  //     method: 'GET',
  //      mode:"cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow", 
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error))
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div>
  //         HAHAHAHA
  //       </div>
  //     </header>
  //   </div>
  // );
  const fetchMovies = async (query) => {
    try {
      let url = APIURL;
      if (query) {
        url = SEARCHAPI + query;
      }
      console.log(url)
      const res = await axios.get(url);
      const data = res.data;
      setMovies(data.results);
      console.log(data.results)
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPoster = async (movieId) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&language=en-US`;
      const response = await axios.get(url);
      const data = response.data;
      const posterPath = data.poster_path;
      const fullPath = "https://image.tmdb.org/t/p/w500/" + posterPath;
      return fullPath;
    } catch (error) {
      console.log(error);
    }
  };

  const recommendMovies = async (selectedMovie) => {
    // try {
    //   const response = await axios.get("/movies_dict.pkl");
    //   const moviesDict = response.data;

    //   const selectedMovieData = moviesDict[selectedMovie];
    //   if (selectedMovieData) {
    //     const similarityResponse = await axios.get("/similarity.pkl");
    //     const similarityMatrix = similarityResponse.data;

    //     const selectedMovieIndex = movies.findIndex(
    //       (movie) => movie.title === selectedMovie
    //     );
    //     const similarityScores = similarityMatrix[selectedMovieIndex];
    //     const recommendedMovieIndices = similarityScores
    //       .map((score, index) => ({ score, index }))
    //       .sort((a, b) => b.score - a.score)
    //       .slice(1, 6)
    //       .map((item) => item.index);

    //     const recommendedMovies = [];

    //     for (const movieIndex of recommendedMovieIndices) {
    //       const movie = movies[movieIndex];
    //       const posterUrl = await fetchPoster(movie.movie_id);
    //       recommendedMovies.push({ title: movie.title, posterUrl });
    //     }

    //     setRecommendedMovies(recommendedMovies);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    fetch(`http://127.0.0.1:5000/data?movie=${selectedMovie}`, {
      method: 'GET',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    })
      .then(response => response.json())
      .then(data => {
        setMovies(data)
      })
      .catch(error => console.log(error))
  };

  // useEffect(() => {
  //   setMovies([]);
  //   if (query === "") {
  //     fetchMovies();
  //   } else {
  //     fetchMovies();
  //     recommendMovies(query);
  //   }
  // }, [query, fetchMovies, recommendMovies]); // Add fetchMovies and recommendMovies to the dependency array

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  const handleRecommend = () => {
    setShowRecommendations(true);
    recommendMovies(query);
  };

  return (
    <div>
      <h1 className="title" style={{textAlign:"center"}}>React Movie Search</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => {setQuery(e.target.value)}}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="button-container">
        <button className="button" onClick={handleRecommend}>
          Recommend
        </button>
      </div>
      <Result movies={movies} />
    </div>
  );


}