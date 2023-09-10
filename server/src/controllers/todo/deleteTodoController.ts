import { Request, Response } from 'express';
import { deleteTodoService, getTodoByIdService } from '../../services';

export async function deleteTodo(req: Request, res: Response): Promise<void> {
    try {
        const todo = await getTodoByIdService(req.params.id);
        if (!todo) {
            res.status(404).json({ msg: 'Todo not found' });
            return;
        }
        await deleteTodoService(req.params.id);
        res.status(200).json({ msg: 'Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}
