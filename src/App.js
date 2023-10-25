import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

import * as credentials from './credentials.js';

const API_URL = "http://www.omdbapi.com?apikey=" + credentials.API_KEY;

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([""]);
    const [usedSearchTerm, setUsedSearchTerm] = useState([""]);

    const searchBarRef = useRef();

    async function searchMovies(title) {
        setUsedSearchTerm(title);     // The movie title that was searched for. Will be shown on the results page.

        const requestString = `${API_URL}&s=${title}`;
        const response = await fetch(requestString);
        const data = await response.json();

        setMovies(data.Search);
        
        searchBarRef.current.value=""; // Clear the search bar when a search is made.

        // logging
        console.log("Found movies", movies, " for search term \"", searchTerm, "\"");
    }
    
    // Do a first movie search when the component is mounted
    useEffect(() => {
        const search = "Writers"; // The first movie that should show up is one I liked.
        setSearchTerm(search);
        searchMovies(search); // For some reason it doesn't work as expected when it's searchMovies(searchTerm);
    }, []);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies!"
                    ref={searchBarRef}
                    // value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.keyCode === 13 ? searchMovies(searchTerm) : {}}
                />

                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 ? // if we have search results
                (                    // display the movies as cards
                    
                    <>
                        <div className="empty">
                            <h2>Results for "{usedSearchTerm}"</h2>
                        </div>
                        <div className="container">
                            {movies.map( (movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    </>
                )
                :   // if we don't have search results
                (   // display a message that no movies were found
                    <div className="empty">
                        <h2>No results for "{usedSearchTerm}"</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;