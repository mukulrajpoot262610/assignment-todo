import { ITodo } from '../../models/todo-model';
import Todo from '../../models/todo-model';

export async function updateTodoService(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
    return await Todo.findByIdAndUpdate(id, data, { new: true });
}
