import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export const fetchTodos = () => api.get('/todos');

export default api;
