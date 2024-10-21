import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema({

    onModel:{
        type: String,
        required: true,
        enum:['Tweet', 'Comment']
    },

    reactionType:{
        type: String,
        enum:["like", "happy", "sad", "lough", "cry"]
        
    },

    likeable:{
        type: Schema.Types.ObjectId,
        required: true,
        refPath:'onModel'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{
    timestamps: true
})

const Like = mongoose.model("Like", likeSchema);

export default Like;
