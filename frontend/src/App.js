import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SelectSearch from 'react-select-search';
import Select from "react-select";
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import 'react-select-search/style.css'
import "./result.css"
import "./home.css"
import './App.css';
import './components/NavigationBar.css';
import pic from "./illustration.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Result from "./result";
import { fetchMovies, recommendMovies } from "./helperFunctions"
// import { ColourOption, colourOptions } from '../data';

export default function App() {
    const [view, setView] = useState("home"); //home, search
    const [query, setQuery] = useState("");   //searched movie
    const [movies, setMovies] = useState([]);  //movie results

    
    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const handleRecommend = () => {
        fetchMovies(query).then(data => setMovies(data))
        recommendMovies(movies[0].title).then(data => setMovies(data))
    };

    // const filterColors = (inputValue) => {
    //     return selectedOptions.filter((i) =>
    //         i.label.toLowerCase().includes(inputValue.toLowerCase())
    //     );
    // };

    // const loadOptions = (inputValue, callback) => {
    //     var ls = []
    //     fetchMovies(inputValue).then(data => {
    //         console.log("filter",data)
    //         for (let i = 0; i < data.length; i++) {
    //             ls.push({ value: data[i].title, label: data[i].title })
    //         }
    //     })
    //     setSelectedOptions(ls)
    //     setTimeout(() => {
    //         callback(filterColors(inputValue));
    //     }, 1000);
    // };
    const filterColors = (inputValue, colourOptions) => {
        return colourOptions.filter(i =>
          i["label"].toLowerCase().includes(inputValue.toLowerCase())
        );
      };
      
    const loadOptions = async (inputValue, callback) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&query=${inputValue}`);
        const colourOptions = await response.json();
        // console.log("color", colourOptions.results)
        var data = colourOptions.results
        var ls = []
        ls.push({ value: inputValue, label: `Search for "${inputValue}"` })
        for (let i = 0; i < data.length; i++) {
            ls.push({ value: data[i].title, label: data[i].title })
        }
        // setSelectedOptions(colourOptions.results)
        // Call the callback function with the filtered color options
        callback(filterColors(inputValue, ls));
    };
    const random = (movieName) => {
        console.log(movieName)
        if (typeof(movieName) == "string"){
            fetchMovies(movieName ? movieName : "").then(data=>setMovies(data))
        }
        else{
            fetchMovies(movieName ? movieName["value"] : "").then(data=>setMovies(data))
        }
    }
    useEffect(() => {
        console.log("effect")
        if (query) {
            fetchMovies(query).then(data => setMovies(data))

        }
        else {
            fetchMovies().then(data => {
                setMovies(data)
            })
        }

    }, []) // <-- empty dependency array
    return (
        <div>
            <Navbar expand="lg" style={{ backgroundColor: "#36474f" }}>

                <Container>
                    <Navbar.Brand onClick={() => { setView("home"); setQuery(""); setMovies(""); fetchMovies() }}>SceneScout</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => { setView("home"); setQuery(""); setMovies(""); fetchMovies() }}>Home</Nav.Link>
                            <Nav.Link onClick={() => { setView("search"); fetchMovies().then(data => setMovies(data)) }}>Search</Nav.Link>
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
                            <InputGroup className="input-group input-group-lg" style={{ color: "black",fontSize:"20px" }} >
                                {/* <Form.Control
                                    placeholder="Find recommended movies"
                                    aria-label="Large"
                                    style={{ borderRadius: "0.5vw", fontSize: '20px' }}
                                    onChange={(e) => { setQuery(e.target.value); fetchMovies(e.target.value).then((mov) =>{setMovies(mov);console.log("hi",movies)})}}
                                /> */}
                                {/* <SelectSearch options={options}  name="language" placeholder="Choose your language" isSearchable={true}/> */}
                                <div style={{ width: "70%" }}>
                                    <AsyncCreatableSelect
                                        cacheOptions
                                        defaultOptions
                                        getNewOptionData={(data) => setQuery(data)} 
                                        loadOptions={loadOptions}
                                        onChange={setSelectedOptions}
                                        isClearable={true}
                                        isSearchable={true}
                                        styles={{ width: "70%" }} />
                                </div>
                                <Button size="lg" style={{ marginLeft: "1vw", borderRadius: "0.5vw", backgroundColor: "#ba68c8", fontSize: '20px' }} onClick={() => { 
                                    var movieName = selectedOptions["value"]
                                    setQuery(movieName)
                                    fetchMovies(movieName).then(data => setMovies(data))
                                    setView("search")
                                     }}>
                                    Find Movies
                                </Button>

                            </InputGroup>

                        </div>
                        <div class="col-md-5">
                            <img src={pic} alt="Illustration" class="Home_illustration__0Ui3l img-fluid" /></div></div></div></div>
                :
                <div>
                    <div className="button-container">
                        <InputGroup className="input-group input-group-lg" style={{ width: "70vw", fontSize:"20px"}} >
                            {/* <Form.Control
                                placeholder="Search movies"
                                aria-label="Large"
                                style={{ borderRadius: "0.5vw", fontSize: '20px' }}
                                value={query}
                                onChange={(e) => { setQuery(e.target.value); fetchMovies(e.target.value).then((mov) => { setMovies(mov) }) }}
                            /> */}
                            <div style={{ width: "70%" }}>
                                {/* {console.log("query",query)} */}
                                <AsyncSelect
                                    defaultValue={{ title: query, label: query }}
                                    loadOptions={loadOptions}
                                    defaultOptions
                                    onChange={random}
                                    onInputChange={random}
                                    styles={{ width: "70%" }}
                                    isSearchable={true}
                                    isClearable={true} />
                                </div>
                            <Button size="lg" style={{ marginLeft: "1vw", borderRadius: "0.5vw", backgroundColor: "#ba68c8", fontSize: '20px' }} onClick={() => { setView("search"); handleRecommend() }}>
                                Recommend
                            </Button>

                        </InputGroup>
                    </div>
                    <Result movies={movies} />
                </div>
            }
        </div>

    )
}
