import { useState, useEffect } from 'react';

import plusIcon from '../assets/plus.svg';

import { AddEditTodoModalComponentProps } from '../types';
import { createTodos, updatedTodos } from '../lib/todoService';

const AddEditTodoModalComponent = ({
    setShowModal,
    setTodos,
    todos,
    isEdit,
    setIsEdit,
}: AddEditTodoModalComponentProps) => {
    const [text, setText] = useState<string>(isEdit?.text || '');
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setText(isEdit?.text || '');
    }, [isEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setText(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text) {
            return setError(true);
        }

        if (isEdit) {
            await updatedTodos(isEdit.id, { text, completed: false }, todos, setTodos, setShowModal, setIsEdit);
        } else {
            await createTodos({ text, completed: false }, todos, isEdit, setTodos, setShowModal, setIsEdit);
        }
    };

    const handleClose = () => {
        setIsEdit(undefined);
        setShowModal(false);
    };

    return (
        <>
            <div className="fixed w-full h-screen top-0 left-0 bg-black opacity-50 z-50" onClick={handleClose}></div>
            <div className="fixed max-w-sm shadow-2xl w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl">{isEdit ? 'Edit Todo' : 'Add New Todo'}</h2>
                    <button className="btn btn-square btn-sm" onClick={handleClose}>
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
