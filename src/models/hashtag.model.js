
import mongoose, {Schema} from "mongoose";

const hashtagSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true,
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


hashtagSchema.pre('save', function(next){
    this.title = this.title.toLowerCase();
    next();
})

const Hashtag = mongoose.model("Hashtag", hashtagSchema);
export default Hashtag;