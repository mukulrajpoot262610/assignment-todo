import { TodoCardProps } from '../types';
import editIcon from '../assets/edit.svg';
import trashIcon from '../assets/trash.svg';

import { deleteTodo, markTodoComplete } from '../lib/todoService';

const TodoCardComponent = ({ todo, setTodos, todos, handleEdit, setFilteredTodos }: TodoCardProps) => {
    const handleMarkComplete = async () => {
        await markTodoComplete(todo._id, todo, todos, setTodos, setFilteredTodos);
    };

    const handleDelete = async () => {
        await deleteTodo(todo._id, todos, setTodos, setFilteredTodos);
    };

    return (
        <li className="bg-blue-100 rounded-lg p-3 flex  items-center justify-between">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    className="checkbox mr-2 checkbox-sm checkbox-info"
                    onClick={handleMarkComplete}
                />
                <p className={`border-l pl-2 border-gray-300 ${todo.completed && 'line-through'}`}>{todo.text}</p>
            </div>
            <div className="flex items-center">
                <button
                    className="rounded-lg btn btn-sm btn-ghost border-0 disabled:bg-blue-100"
                    onClick={() => handleEdit(todo._id, todo.text)}
                    disabled={todo.completed}
                >
                    <img src={editIcon} className="w-5 h-6" />
                </button>
                <button className="rounded-lg btn btn-sm btn-ghost border-0" onClick={handleDelete}>
                    <img src={trashIcon} className="w-5 h-6" />
                </button>
            </div>
        </li>
    );
};

export default TodoCardComponent;
