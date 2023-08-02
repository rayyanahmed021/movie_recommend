import axios from "axios";
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&page=1";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=62dbfaf3ecfd92acfdc2889d0f966ecc&query=";

export const fetchMovies = async (query) => {
    try {
        let url = APIURL;
        if (query) {
            url = SEARCHAPI + query;
        }
        const res = await axios.get(url);
        const data = res.data;
        return data.results
        // console.log(data.results)
    } catch (err) {
        console.log(err);
    }
};
export const fetchPoster = async (movieId) => {
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


export const recommendMovies = async (selectedMovie) => {
    try {
        const response = await fetch(`http://127.0.0.1:5000/data?movie=${selectedMovie}`, {
            method: 'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }

}