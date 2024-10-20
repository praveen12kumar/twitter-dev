import express from 'express';
import connect from './config/database.js';
import dotenv from 'dotenv';

dotenv.config({
    path:".env"
});

const app = express();


app.listen(3000, async () => {
    console.log("Server started");
    await connect();
    console.log("Database connected");
    
})