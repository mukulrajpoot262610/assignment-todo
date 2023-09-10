import { Todo, TodoEditInfo } from '../../types';

export interface AddEditTodoModalProps {
    todos: Todo[];
    isEdit: TodoEditInfo | undefined;
    setTodos: (todo: Todo[]) => void;
    setShowModal: (showModal: boolean) => void;
    setIsEdit: (editInfo: TodoEditInfo | undefined) => void;
    setFilteredTodos: (todo: Todo[]) => void;
}
