import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import SearchMovies from './searchMovies';
// import Navigationbar from './components/NavigationBar';
import HomePage from './homepage';
import "./result.css"
import "./home.css"
import './App.css';
import './components/NavigationBar.css';
import pic from "./illustration.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Result from "./result";


export default function App() {
    const [view, setView] = useState("home"); //home, search
    const [movie, setMovie] = useState("");

    //searchMovies
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [showRecommendations, setShowRecommendations] = useState(false);

    const APIURL =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&page=1";
    const SEARCHAPI =
        "https://api.themoviedb.org/3/search/movie?&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&query=";

    const fetchMovies = async (query) => {
        try {
            let url = APIURL;
            if (query) {
                url = SEARCHAPI + query;
            }
            const res = await axios.get(url);
            const data = res.data;
            setMovies(data.results);
            // console.log(data.results)
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
                console.log(data);
                setMovies(data);
            })
            .catch(error => console.log(error))
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        fetchMovies(query);
    };

    const handleRecommend = () => {
        setShowRecommendations(true);
        recommendMovies(query);
    };
    useEffect(() => {
        // do stuff here..
        if (query) {
            fetchMovies(query)
        }
        else {
            fetchMovies()
        }

    }, []) // <-- empty dependency array
    return (
        <div>
            <Navbar expand="lg" style={{ backgroundColor: "#36474f" }}>

                <Container>
                    <Navbar.Brand onClick={() => {setView("home");setQuery("");setMovies("");fetchMovies()}}>SceneScout</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => {setView("home");setQuery("");setMovies("");fetchMovies()}}>Home</Nav.Link>
                            <Nav.Link onClick={() => setView("search")}>Search</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {view == "home" ? <div class="Home_outer__yFb70">
                <div class="Home_container__bCOhY container">
                    <div class="Home_alignCenter__24fiK row">
                        <div class="col-md-7">
                            <h1 class="Home_h1__7tdRW" style={{ color: "black" }}>Dont waste your time searching for movies</h1>
                            <p>SceneScout uses advanced Natural Language Processing to understand your movie preferences and deliver highly
                                relevant search results.</p>
                            <InputGroup className="input-group input-group-lg" >
                                <Form.Control
                                    placeholder="Find recommended movies"
                                    aria-label="Large"
                                    style={{ borderRadius: "0.5vw", fontSize: '20px' }}
                                    onChange={(e) => { setQuery(e.target.value); fetchMovies(e.target.value)}}
                                />
                                <Button size="lg" style={{ marginLeft: "1vw", borderRadius: "0.5vw", backgroundColor: "#ba68c8", fontSize: '20px' }} onClick={() => {setView("search") }}>
                                    Find Movies
                                </Button>
                            </InputGroup>

                        </div>
                        <div class="col-md-5">
                            <img src={pic} alt="Illustration" class="Home_illustration__0Ui3l img-fluid" /></div></div></div></div>
                :
                <div>
                    <div className="button-container">
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="input"
                                placeholder="Search movies..."
                                value={query}
                                onChange={(e) => { setQuery(e.target.value); fetchMovies(e.target.value) }}
                            />
                            <span>
                                <Button size="lg" onClick={handleRecommend} style={{ "backgroundColor": "#ba68c8" }}>Recommend</Button>
                            </span>
                        </form>

                    </div>
                    {/* </form> */}
                    <Result movies={movies} />
                </div>
            }
        </div>

    )
}

// function App(){
//     return (
//         <div>
//             {/* <Navigationbar /> */}
//             <NavBar/>
//             <HomePage />
//         </div>
//     )
// }