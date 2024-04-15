import express from 'express';
import Room from '../../models/room.js';

const router = express.Router();

router.delete('/rooms/:id', async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.json({ message: 'Room deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;