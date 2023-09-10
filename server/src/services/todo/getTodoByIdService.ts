import { ITodo } from '../../models/todo-model';
import Todo from '../../models/todo-model';

export async function getTodoByIdService(id: string): Promise<ITodo | null> {
    return await Todo.findById(id);
}
