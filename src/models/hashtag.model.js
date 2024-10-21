
import mongoose, {Schema} from "mongoose";

const hashtagSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            index : true
        },
        tweets:[
            {
                type: Schema.Types.ObjectId,
                ref: "Tweet",
            }
        ]
    },{
        timestamps: true,
    }
);

const Hashtag = mongoose.model("Hashtag", hashtagSchema);
export default Hashtag;