import express from 'express';
import connect from './config/database.js';
import dotenv from 'dotenv';
import Tweet from './models/tweet.models.js';
import HashtagRepository from './repository/hashtag-repository.js';
import TweetService from './services/tweet-service.js';

dotenv.config({
    path:".env"
});




const app = express();


app.listen(3000, async () => {
    await connect();
    console.log("Server is listening on port 3000");
    let repo = new HashtagRepository();

    //const response = await repo.findByName(["Happy", "Sad", "Excited"]);
    const service = new TweetService();
    const res = await service.create({
        content: "#Programming is #love and #fun, I #love to do it ",
        
    })
    
    
})