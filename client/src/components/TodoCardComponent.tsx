import { Todo } from '../types';
import editIcon from '../assets/edit.svg';
import trashIcon from '../assets/trash.svg';

interface TodoCardProps {
    todo: Todo;
}

const TodoCardComponent = ({ todo }: TodoCardProps) => {
    console.log(todo);

    return (
        <li className="bg-blue-100 rounded-lg p-3 flex  items-center justify-between">
            <div className="flex items-center">
                <input type="checkbox" checked={todo.completed} className="checkbox mr-2 checkbox-sm" />
                <p className="border-l pl-2 border-gray-300">{todo.text}</p>
            </div>
            <div className="flex items-center">
                <button className="rounded-lg btn btn-sm btn-ghost border-0">
                    <img src={editIcon} className="w-5 h-6" />
                </button>
                <button className="rounded-lg btn btn-sm btn-ghost border-0">
                    <img src={trashIcon} className="w-5 h-6" />
                </button>
            </div>
        </li>
    );
};

export default TodoCardComponent;
