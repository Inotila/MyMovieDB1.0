import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';
const apiKey = 'movieDB-34jgjg';

export const getApiKey = async () => {
    const response = await axios.get(`${API_BASE_URL}/keys`);
    return response.data.data;
};

export const getMovies = async (key) => {
    const response = await axios.get(`${API_BASE_URL}/movies?key=${key}`);
    return response.data.data;
};

export const toggleFavorite = async (key, imdbid) => {
    const response = await axios.put(`${API_BASE_URL}/movies/${imdbid}?key=${key}`);
    return response.data;
};

export const deleteMovie = async (key, imdbid) => {
    const response = await axios.delete(`${API_BASE_URL}/movies/${imdbid}?key=${key}`);
    return response.data;
}


export const login = async (user) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, user);
    if (response.data.success) {
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`${API_BASE_URL}/auth/logout`);
    return response.data;
};

export const register = async (user) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, user);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const addMovie = async (movie, key) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/movies?key=${key}`, movie);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};