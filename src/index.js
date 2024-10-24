import express from 'express';
import dotenv from 'dotenv';
import connect from './config/database.js';
import apiRoutes from './routes/index.js';
import bodyParser from 'body-parser';
import LikeService from './services/like-service.js';

import {UserRepository, TweetRepository} from "./repository/index.js";


dotenv.config({
    path:".env"
});




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRoutes);


app.listen(process.env.PORT, async () => {
    await connect();
    console.log(`Server is listening on port: ${process.env.PORT}`); 
    
    // const userRepo = new UserRepository();
    // const users = await userRepo.getAll();

    // const likeService = new LikeService();

    // await likeService.toggleLike({
    //     modelId:"6719c94554ea8c1a5cd9b68d",
    //     modelType:"Tweet",
    //     userId:users[0]._id,
    // })
}) 