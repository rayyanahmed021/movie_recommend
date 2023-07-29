import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies';
import NavBar from './navBar'
// import Result from './result';
// import Main from './Main';
import './style.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.css';
// import Navigationbar from './components/NavigationBar';
// import HomePage from './homepage';
// import LandingPage from "./firstPage"
import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./searchPage"

ReactDOM.render(
  
  <React.StrictMode>
    
    {/* <div className="container"> */}
    {/* <h1 className="title">React Movie Search</h1> */}
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="true"></script>

    <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      crossOrigin="true"></script>

    <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossOrigin="true"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
    <div>
      {/* <NavBar /> */}
              {/* <Navigationbar/> */}

    </div>
    <App/>
    {/* <HomePage></HomePage> */}
    {/* <SearchMovies /> */}
    {/* </div> */}
    {/* <LandingPage/> */}

  </React.StrictMode>,
  document.getElementById('root')
);