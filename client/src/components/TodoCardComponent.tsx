import { Todo } from '../types';
import editIcon from '../assets/edit.svg';
import trashIcon from '../assets/trash.svg';
import { deleteTodos, updateTodos } from '../services/api';
import { toast } from 'react-hot-toast';

interface TodoCardProps {
    todo: Todo;
    todos: Todo[];
    setTodos: (todo: Todo[]) => void;
}

const TodoCardComponent = ({ todo, setTodos, todos }: TodoCardProps) => {
    const handleMarkComplete = async (id: string) => {
        try {
            const { data } = await updateTodos(id, { completed: !todo.completed });
            const updatedTodos = todos.map((todo) => (todo._id === data.todo._id ? data.todo : todo));
            setTodos(updatedTodos);
            toast.success(`${data.todo.completed ? 'Marked Complete' : 'Marked Incomplete'}`);
        } catch (err) {
            toast.error('Server Error');
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteTodos(id);
            const updatedTodos = todos.filter((todo) => todo._id !== id);
            setTodos(updatedTodos);
            toast.success('Deleted Successfully');
        } catch (err) {
            toast.error('Server Error');
        }
    };

    const handleEdit = (id: string) => {};

    return (
        <li className="bg-blue-100 rounded-lg p-3 flex  items-center justify-between">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    className="checkbox mr-2 checkbox-sm"
                    onClick={() => handleMarkComplete(todo._id)}
                />
                <p className={`border-l pl-2 border-gray-300 ${todo.completed && 'line-through'}`}>{todo.text}</p>
            </div>
            <div className="flex items-center">
                <button className="rounded-lg btn btn-sm btn-ghost border-0" onClick={() => handleEdit(todo._id)}>
                    <img src={editIcon} className="w-5 h-6" />
                </button>
                <button className="rounded-lg btn btn-sm btn-ghost border-0" onClick={() => handleDelete(todo._id)}>
                    <img src={trashIcon} className="w-5 h-6" />
                </button>
            </div>
        </li>
    );
};

export default TodoCardComponent;
