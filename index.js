import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import createRoomRouter from './routes/roomRoutes/create.js';
import updateRoomRouter from './routes/roomRoutes/update.js';
import deleteRoomRouter from './routes/roomRoutes/delete.js';
import viewRoomRouter from './routes/roomRoutes/view.js';

dotenv.config();

const app = express();

app.use(express.json());

//Routes
app.use(createRoomRouter); //create
app.use(viewRoomRouter); //read
app.use(updateRoomRouter); //update
app.use(deleteRoomRouter); //delete

app.use('*', (req, res) => {
    return res.status(404).json({
      success: false,
      message: 'API endpoint doesnt exist'
    })
});

connectDB();

const port = process.env.PORT || "3000";
app.listen(port, (err)=> {
    if(err) console.log("Error in server setup");
    console.log("Server listening on port ", port);
});