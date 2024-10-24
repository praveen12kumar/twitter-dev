import { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        userId:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        onModel:{
            type: String,
            enum:["Tweet", "Comment"],
            required: true
        },
        commentable:{
            type: Schema.Types.ObjectId,
            refPath:'onModel',
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;