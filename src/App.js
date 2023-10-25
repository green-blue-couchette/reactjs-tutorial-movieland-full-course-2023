import React, {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

import * as credentials from './credentials.js';

const API_URL = "http://www.omdbapi.com?apikey=" + credentials.API_KEY;

const App = () => {

    const [movies, setMovies] = useState([]);

    async function searchMovies(title) {
        const requestString = `${API_URL}&s=${title}`;
        const response = await fetch(requestString);
        const data = await response.json();

        setMovies(data.Search);

        // logging
        console.log("Found movies", movies);
    }
    
    // Search for a movie whenever the app is mounted
    useEffect(() => {
        searchMovies("Revolution");
    }, []);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies!"
                    value="Revolution"
                    onChange={() => {}}
                />

                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0 ? // if we have search results
                (                    // display the movies as cards
                    <div className="container">
                        {movies.map( (movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                )
                :   // if we don't have search results
                (   // display a message that no movies were found
                    <div className="empty">
                        <h2>No results</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;