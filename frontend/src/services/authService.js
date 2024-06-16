import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const login = async (user) => {
    const response = await axios.post(`${API_URL}/auth/login`, user);
    return response.data;
};

const register = async (user) => {
    const response = await axios.post(`${API_URL}/auth/register`, user);
    return response.data;
};

export { login, register };
