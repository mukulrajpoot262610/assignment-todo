import { Request, Response } from 'express';
import { createTodoService } from '../../services';
import { ITodo } from '../../models/todo-model';

export async function createTodo(req: Request, res: Response): Promise<void> {
    try {
        const { text, completed }: ITodo = req.body;
        const newTodo = await createTodoService({
            text,
            completed,
        } as ITodo);
        res.status(201).json({ msg: 'Todo Created Successfully', todo: newTodo });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
