import React from 'react';

// Not necessary to name the component the same thing as the filename,
// but it's a good practice!

const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.in/300x450@2x.png/dark"}/>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;