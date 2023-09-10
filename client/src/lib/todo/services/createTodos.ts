import { Todo, TodoEditInfo } from '../../../types';
import { createTodos as apiCreateTodos } from '../../../helpers/api';
import { toast } from 'react-hot-toast';

export async function createTodos(
    payload: { text: string; completed: boolean },
    todos: Todo[],
    isEdit: TodoEditInfo | undefined,
    setTodos: (todo: Todo[]) => void,
    setShowModal: (showModal: boolean) => void,
    setIsEdit: (isEdit: undefined) => void,
    setFilteredTodos: (todo: Todo[]) => void
) {
    try {
        const { data } = await apiCreateTodos(payload);
        const updatedTodos = todos.map((todo) => (todo._id === data.todo._id ? data.todo : todo));
        setTodos(isEdit ? updatedTodos : [...todos, data.todo]);
        setFilteredTodos(isEdit ? updatedTodos : [...todos, data.todo]);
        setShowModal(false);
        setIsEdit(undefined);
        toast.success(data.msg);
    } catch (error) {
        toast.error('Failed to create todo.');
    }
}
