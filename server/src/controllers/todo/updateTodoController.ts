import { Request, Response } from 'express';
import { updateTodoService } from '../../services';

export async function updateTodo(req: Request, res: Response): Promise<void> {
    try {
        const updatedTodo = await updateTodoService(req.params.id, req.body);
        if (!updatedTodo) {
            res.status(404).json({ msg: 'Todo not found' });
        } else {
            res.status(200).json({ msg: 'Todo Updated Successfully', todo: updatedTodo });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
}
