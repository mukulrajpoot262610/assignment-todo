export interface Todo {
    _id: string;
    text: string;
    completed: boolean;
}

export interface TodoPayload {
    text?: string;
    completed: boolean;
}

export interface TodoEditInfo {
    id: string;
    text: string;
}

export interface AddEditTodoModalComponentProps {
    todos: Todo[];
    isEdit: TodoEditInfo | undefined;
    setTodos: (todo: Todo[]) => void;
    setShowModal: (showModal: boolean) => void;
    setIsEdit: (editInfo: TodoEditInfo | undefined) => void;
}

export interface TabComponentProps {
    tab: number;
    handleTabChange: (tab: number) => void;
}

export interface TodoCardProps {
    todo: Todo;
    todos: Todo[];
    setTodos: (todo: Todo[]) => void;
    handleEdit: (id: string, text: string) => void;
}
