import React, { useEffect, useState } from 'react';
import { getApiKey, getMovies } from '../services/myMovieService';
import MovieList from '../components/MyMovieList';
import NavigationBar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Fav = () => {
    const [movies, setMovies] = useState([]);
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const key = await getApiKey();
            setApiKey(key);
            const movieList = await getMovies(key);
            setMovies(movieList.filter(movie => {
                return movie.is_favorite === true;
            }));
        };
        fetchData();
    }, []);
    return (
        <div>
        <NavigationBar />
        <div className="container mt-4">
            <h1 className="text-center mb-4">My Movie DB</h1>
            <h2 className="text-center">My favourite movie list</h2>
            <MovieList movies={movies} apiKey={apiKey} />
        </div>
    </div>
    );
};

export default Fav;
