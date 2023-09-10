import { toast } from 'react-hot-toast';
import { Todo } from '../../../types';
import { updateTodos as apiUpdateTodos } from '../../../helpers/api';

export async function updatedTodos(
    todoId: string,
    payload: { text: string; completed: boolean },
    todos: Todo[],
    setTodos: (todo: Todo[]) => void,
    setShowModal: (showModal: boolean) => void,
    setIsEdit: (isEdit: undefined) => void,
    setFilteredTodos: (todo: Todo[]) => void
) {
    try {
        const { data } = await apiUpdateTodos(todoId, payload);
        setTodos(todos.map((t) => (t._id === data.todo._id ? data.todo : t)));
        setFilteredTodos(todos.map((t) => (t._id === data.todo._id ? data.todo : t)));
        setShowModal(false);
        setIsEdit(undefined);
        toast.success('Updated Successfully');
    } catch (err) {
        toast.error('Server Error');
    }
}
