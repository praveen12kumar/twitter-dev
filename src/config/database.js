import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connect = async () => {
    const connectDB = await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`);
    connectDB.connection.on("connected", () => {
        console.log(`Database connected to ${connectDB.connection.host}`);
        
    });
};

export default connect;