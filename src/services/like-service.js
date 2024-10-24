
import { LikeRepository, TweetRepository } from "../repository/index.js"

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){  // api1/v1/likes/toggle?id="modelId"&type="Tweet"
            //   console.log(modelId, modelType, userId);
        try {
            if(modelType === "Tweet"){
                
                var likeable = await this.tweetRepository.find(modelId)
                 
            }
            else if(modelType === "Comment"){
                //todo
              
            }
            else{
                throw new Error("unknown model type");
            }
            const exists = await this.likeRepository.findByUserAndLikeable({
                user:userId,
                onModel:modelType,
                likeable:modelId
            }) 

            if(exists){
                likeable.likes.pull(exists.id);
                await likeable.save();
                await exists.deleteOne();
                var isAdded = false;
            }
            else{
                const newLike = await this.likeRepository.create({
                    user:userId,
                    onModel:modelType,
                    likeable:modelId
                })
              
                likeable.likes.push(newLike.id);
                await likeable.save();
                var isAdded = true;
            }

            return isAdded;
        } catch (error) {
            console.log(error);
            throw error;
        }
    } 
}


export default LikeService;