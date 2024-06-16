import React from 'react';
import MovieItem from './MyMovieItem';

const MovieList = ({ movies, apiKey }) => {
    return (
        <div className="row">
            
        {movies.map(movie => (
            <MovieItem key={movie.imdbid} movie={movie} apiKey={apiKey} />
        ))}
    </div>
    );
};

export default MovieList;
