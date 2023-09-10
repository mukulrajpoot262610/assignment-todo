import { toast } from 'react-hot-toast';
import { deleteTodos } from '../../../helpers/api';
import { Todo } from '../../../types';

export async function deleteTodo(
    todoId: string,
    todos: Todo[],
    setTodos: (todo: Todo[]) => void,
    setFilteredTodos: (todo: Todo[]) => void
) {
    try {
        await deleteTodos(todoId);
        const updatedTodos = todos.filter((t) => t._id !== todoId);
        setTodos(updatedTodos);
        setFilteredTodos(updatedTodos);
        toast.success('Deleted Successfully');
    } catch (err) {
        toast.error('An error occurred while deleting.');
    }
}
