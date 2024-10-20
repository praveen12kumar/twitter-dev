import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            max:[200, "Tweet can not be more than 200 characters"],
        },
        hashtags:[
            {
                type: Schema.Types.ObjectId,
                ref: "Hashtag",
            }
        ]
    },
    {
        timestamps: true,
    }
);




const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;