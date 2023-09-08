import Todo, { ITodo } from '../models/todo-model';

export async function createTodoService(data: ITodo): Promise<ITodo> {
    const todo = new Todo(data);
    return await todo.save();
}

export async function getAllTodosService(): Promise<ITodo[]> {
    return await Todo.find();
}

export async function getTodoByIdService(id: string): Promise<ITodo | null> {
    return await Todo.findById(id);
}

export async function updateTodoService(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
    return await Todo.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteTodoService(id: string): Promise<void> {
    await Todo.findByIdAndRemove(id);
}
