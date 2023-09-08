import { useState } from 'react';
import plusIcon from '../assets/plus.svg';
import { Todo } from '../types';
import { createTodos } from '../services/api';
import { toast } from 'react-hot-toast';

interface AddEditTodoModalComponentProps {
    setShowModal: (showModal: boolean) => void;
    todos: Todo[];
    setTodos: (todo: Todo[]) => void;
}

const AddEditTodoModalComponent = ({ setShowModal, setTodos, todos }: AddEditTodoModalComponentProps) => {
    const [text, setText] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setText(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text) {
            return setError(true);
        }

        try {
            const { data } = await createTodos({ text: text, completed: false });
            setTodos([...todos, data.todo]);
            toast.success(data.msg);
            setShowModal(false);
        } catch (err) {
            toast.error('Server Error');
        }
    };

    return (
        <>
            <div
                className="fixed w-full h-screen top-0 left-0 bg-black opacity-50 z-50"
                onClick={() => setShowModal(false)}
            ></div>
            <div className="fixed max-w-sm shadow-2xl w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl">Add New Todo</h2>
                    <button className="btn btn-square btn-sm" onClick={() => setShowModal(false)}>
                        <img src={plusIcon} className="w-6 h-6 rotate-45" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Title?</span>
                        </label>
                        <input
                            value={text}
                            onChange={handleChange}
                            type="text"
                            placeholder="Type here"
                            className={`input input-bordered w-full ${error && 'input-error'}`}
                        />
                        {error && (
                            <label className="label">
                                <span className="label-text-alt text-red-500">Please Enter Todo Title</span>
                            </label>
                        )}
                    </div>

                    <button className="btn btn-sm mt-4" type="submit">
                        submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddEditTodoModalComponent;
