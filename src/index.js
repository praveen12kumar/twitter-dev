import express from 'express';
import dotenv from 'dotenv';
import connect from './config/database.js';
import apiRoutes from './routes/index.js';
import bodyParser from 'body-parser';


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
})