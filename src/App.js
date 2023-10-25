import React, {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

import * as credentials from './credentials.js';

const API_URL = "http://www.omdbapi.com?apikey=" + credentials.API_KEY;

const movie1 = {
    "Title": "Jesus Revolution",
    "Year": "2023",
    "imdbID": "tt10098448",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjQ4M2JiMTEtNDhiMi00OWM1LTkwMWEtODdjYTQxNWQyOTFiXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
}

const App = () => {

    async function searchMovies(title) {
        const requestString = `${API_URL}&s=${title}`;
        const response = await fetch(requestString);
        const data = await response.json();

        console.log(data.Search);
    }
    
    // Search for a movie whenever the app is mounted
    useEffect(() => {
        searchMovies('Revolution');
    }, []);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies!"
                    value="Jesus Revolution"
                    onChange={() => {}}
                />

                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://placehold.in/300x200@2x.png/dark"}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default App;