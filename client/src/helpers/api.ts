import axios from 'axios';
import { TodoPayload } from '../types';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export const fetchTodos = () => api.get('/todos');
export const deleteTodos = (id: string) => api.delete(`/todos/${id}`);
export const updateTodos = (id: string, data: TodoPayload) => api.put(`/todos/${id}`, data);
export const createTodos = (data: TodoPayload) => api.post('/todos', data);

export default api;
