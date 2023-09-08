import {
    updateTodos as apiUpdateTodos,
    deleteTodos,
    fetchTodos as apiFetchTodos,
    createTodos as apiCreateTodos,
} from '../helpers/api';
import { Todo, TodoEditInfo } from '../types';
import { toast } from 'react-hot-toast';

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

export async function markTodoComplete(todoId: string, todo: Todo, todos: Todo[], setTodos: (todo: Todo[]) => void) {
    try {
        const { data } = await apiUpdateTodos(todoId, { completed: !todo.completed });
        const updatedTodos = todos.map((t) => (t._id === data.todo._id ? data.todo : t));
        setTodos(updatedTodos);
        toast.success(`${data.todo.completed ? 'Marked Complete' : 'Marked Incomplete'}`);
    } catch (err) {
        toast.error('Server Error');
    }
}

export async function deleteTodo(todoId: string, todos: Todo[], setTodos: (todo: Todo[]) => void) {
    try {
        await deleteTodos(todoId);
        const updatedTodos = todos.filter((t) => t._id !== todoId);
        setTodos(updatedTodos);
        toast.success('Deleted Successfully');
    } catch (err) {
        toast.error('An error occurred while deleting.');
    }
}

export async function createTodos(
    payload: { text: string; completed: boolean },
    todos: Todo[],
    isEdit: TodoEditInfo | undefined,
    setTodos: (todo: Todo[]) => void,
    setShowModal: (showModal: boolean) => void,
    setIsEdit: (isEdit: undefined) => void
) {
    try {
        const { data } = await apiCreateTodos(payload);
        const updatedTodos = todos.map((todo) => (todo._id === data.todo._id ? data.todo : todo));
        setTodos(isEdit ? updatedTodos : [...todos, data.todo]);
        setShowModal(false);
        setIsEdit(undefined);
        toast.success(data.msg);
    } catch (error) {
        toast.error('Failed to create todo.');
    }
}

export async function updatedTodos(
    todoId: string,
    payload: { text: string; completed: boolean },
    todos: Todo[],
    setTodos: (todo: Todo[]) => void,
    setShowModal: (showModal: boolean) => void,
    setIsEdit: (isEdit: undefined) => void
) {
    try {
        const { data } = await apiUpdateTodos(todoId, payload);
        setTodos(todos.map((t) => (t._id === data.todo._id ? data.todo : t)));
        setShowModal(false);
        setIsEdit(undefined);
        toast.success('Updated Successfully');
    } catch (err) {
        toast.error('Server Error');
    }
}
