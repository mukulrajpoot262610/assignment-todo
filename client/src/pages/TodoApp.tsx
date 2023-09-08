import React, { useEffect, useState } from 'react';
import plusIcon from '../assets/plus.svg';

import TabComponent from '../components/TabComponent';
import HeaderComponent from '../components/HeaderComponent';
import TodoCardComponent from '../components/TodoCardComponent';
import { fetchTodos } from '../services/api';
import { Todo } from '../types';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [tab, setTab] = useState<number>(1);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const { data } = await fetchTodos();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        getTodos();
    }, []);

    return (
        <div className="max-w-2xl w-full mx-auto bg-white h-page rounded-lg relative">
            <HeaderComponent />
            <TabComponent tab={tab} setTab={setTab} />
            <ul className="p-4 flex flex-col gap-3 h-4/6 overflow-auto">
                {todos.map((todo) => (
                    <TodoCardComponent todo={todo} />
                ))}
            </ul>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
                <button className="btn btn-sm btn-ghost w-12 h-12 bg-blue-500 rounded-full shadow-2xl flex justify-center items-center">
                    <img src={plusIcon} className="w-6" />
                </button>
            </div>
        </div>
    );
};

export default TodoApp;
