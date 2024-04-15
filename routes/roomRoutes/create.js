import express from 'express';
import Room from '../../models/room.js';

const router = express.Router();

router.post('/rooms', async(req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (error) {
       res.status(400).json({message: error.message}); 
    }
});

export default router;