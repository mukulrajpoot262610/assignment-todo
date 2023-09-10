import { Todo } from '../../../types';
import { fetchTodos as apiFetchTodos } from '../../../helpers/api';

export async function fetchTodos(setTodos: (todo: Todo[]) => void, setFilteredTodos: (todo: Todo[]) => void) {
    try {
        const { data } = await apiFetchTodos();
        setTodos(data);
        setFilteredTodos(data);
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
}
