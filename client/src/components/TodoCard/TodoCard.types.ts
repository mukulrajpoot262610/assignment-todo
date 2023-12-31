import { Todo } from '../../types';

export interface TodoCardProps {
    todo: Todo;
    tab: number;
    todos: Todo[];
    setTodos: (todo: Todo[]) => void;
    handleEdit: (id: string, text: string) => void;
    setFilteredTodos: (todo: Todo[]) => void;
}
