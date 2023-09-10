import { ITodo } from '../../models/todo-model';
import Todo from '../../models/todo-model';

export async function createTodoService(data: ITodo): Promise<ITodo> {
    const todo = new Todo(data);
    return await todo.save();
}
