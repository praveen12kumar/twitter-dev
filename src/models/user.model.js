import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

},{
    timestamps:true
})

userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    else{
        const SALT = 10;
        const encryptedPassword = await bcrypt.hash(user.password, SALT);
        user.password = encryptedPassword;
        next();
    }
})

const User = mongoose.model("User", userSchema);

export default User;