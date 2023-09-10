import { Todo } from '../../../types';
import { updateTodos as apiUpdateTodos } from '../../../helpers/api';
import { toast } from 'react-hot-toast';

export async function markTodoComplete(
    todoId: string,
    todo: Todo,
    todos: Todo[],
    setTodos: (todo: Todo[]) => void,
    setFilteredTodos: (todo: Todo[]) => void
) {
    try {
        const { data } = await apiUpdateTodos(todoId, { completed: !todo.completed });
        const updatedTodos = todos.map((t) => (t._id === data.todo._id ? data.todo : t));
        setTodos(updatedTodos);
        setFilteredTodos(updatedTodos);
        toast.success(`${data.todo.completed ? 'Marked Complete' : 'Marked Incomplete'}`);
    } catch (err) {
        toast.error('Server Error');
    }
}
