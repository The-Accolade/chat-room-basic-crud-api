import express from 'express';
import Room from '../../models/room.js';

const router = express.Router();

router.put('/rooms/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const room = await Room.findByIdAndUpdate(id, req.body, {new: true});
        if(!room) res.status(404).json({message: 'Room not found'});

        res.json(room);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

export default router;