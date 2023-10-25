import React, {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

import * as credentials from './credentials.js';

const API_URL = "http://www.omdbapi.com?apikey=" + credentials.API_KEY;

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

            </div>
            
        </div>
    );
}

export default App;