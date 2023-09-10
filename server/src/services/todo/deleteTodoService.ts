import { ITodo } from '../../models/todo-model';
import Todo from '../../models/todo-model';

export async function deleteTodoService(id: string): Promise<void> {
    await Todo.findByIdAndRemove(id);
}
