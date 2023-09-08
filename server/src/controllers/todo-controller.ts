import { Request, Response } from 'express';
import * as todoService from '../services/todo-service';
import { ITodo } from '../models/todo-model';

export async function createTodo(req: Request, res: Response): Promise<void> {
    try {
        const { text, completed }: ITodo = req.body;
        const newTodo = await todoService.createTodoService({
            text,
            completed,
        } as ITodo);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

export async function getAllTodos(_req: Request, res: Response): Promise<void> {
    try {
        const todos = await todoService.getAllTodosService();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

export async function updateTodo(req: Request, res: Response): Promise<void> {
    try {
        const updatedTodo = await todoService.updateTodoService(req.params.id, req.body);
        if (!updatedTodo) {
            res.status(404).json({ error: 'Todo not found' });
        } else {
            res.status(200).json(updatedTodo);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
}

export async function deleteTodo(req: Request, res: Response): Promise<void> {
    try {
        const todo = await todoService.getTodoByIdService(req.params.id);
        if (!todo) {
            res.status(404).json({ error: 'Todo not found' });
            return;
        }
        await todoService.deleteTodoService(req.params.id);
        res.status(200).json({ error: 'Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
