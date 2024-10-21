import Tweet from "../models/tweet.models.js";

class TweetRepository {
    
    async create(data) {
        try {
            let tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    

    async getAllTweet(){
        try {
            let tweets = await Tweet.find({});
            return tweets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTweetById(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
export default TweetRepository;