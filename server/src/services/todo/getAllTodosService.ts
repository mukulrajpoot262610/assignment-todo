import { ITodo } from '../../models/todo-model';
import Todo from '../../models/todo-model';

export async function getAllTodosService(): Promise<ITodo[]> {
    return await Todo.find();
}
