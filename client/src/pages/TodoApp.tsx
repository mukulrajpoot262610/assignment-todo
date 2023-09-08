import React, { useEffect, useState } from 'react';
import plusIcon from '../assets/plus.svg';

import TabComponent from '../components/TabComponent';
import HeaderComponent from '../components/HeaderComponent';
import TodoCardComponent from '../components/TodoCardComponent';
import { fetchTodos } from '../services/api';
import { Todo } from '../types';
import AddEditTodoModalComponent from '../components/AddEditTodoModalComponent';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
    const [tab, setTab] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const { data } = await fetchTodos();
                setTodos(data);
                setFilteredTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        getTodos();
    }, []);

    const handleTabChange = (selectedTab: number) => {
        setTab(selectedTab);
        if (selectedTab === 1) {
            const completed = todos.filter((todo) => todo.completed);
            setFilteredTodos(completed);
        } else {
            setFilteredTodos(todos);
        }
    };

    return (
        <div className="max-w-2xl w-full mx-auto bg-white h-page rounded-lg relative">
            <HeaderComponent />
            <TabComponent tab={tab} handleTabChange={handleTabChange} />
            <ul className="p-4 flex flex-col gap-3 h-4/6 overflow-auto">
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                        <TodoCardComponent key={todo._id} todo={todo} setTodos={setTodos} todos={todos} />
                    ))
                ) : (
                    <h1>No todos</h1>
                )}
            </ul>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
                <button
                    className="btn btn-sm btn-ghost w-12 h-12 bg-blue-500 rounded-full shadow-2xl flex justify-center items-center"
                    onClick={() => setShowModal(true)}
                >
                    <img src={plusIcon} className="w-6" />
                </button>
            </div>

            {showModal && <AddEditTodoModalComponent setShowModal={setShowModal} setTodos={setTodos} todos={todos} />}
        </div>
    );
};

export default TodoApp;
