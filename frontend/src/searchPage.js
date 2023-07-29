import ReactDOM from 'react-dom';
import React from 'react';
import Navigationbar from './components/NavigationBar';
import SearchMovies from './searchMovies';
import "./App.css"
import { render } from 'react-dom';
export default function search(){
    // document.querySelector("html").innerHTML="<div>ada</div>"
    ReactDOM.render(
        <div>
            <Navigationbar />
            <SearchMovies />
        </div>
    ,document.getElementById('root'))
}