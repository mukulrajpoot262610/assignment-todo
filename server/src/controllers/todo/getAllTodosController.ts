import { Request, Response } from 'express';
import { getAllTodosService } from '../../services';

export async function getAllTodos(_req: Request, res: Response): Promise<void> {
    try {
        const todos = await getAllTodosService();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
