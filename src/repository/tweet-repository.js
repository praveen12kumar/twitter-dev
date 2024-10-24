import Tweet from "../models/tweet.models.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {

    constructor(){
        super(Tweet);
    }
    async create(data) {
        try {
            let tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async getWithComments(id) {
        try {
            let tweet = await Tweet.findById(id).populate({path:'comments'}).lean()
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll(){
        try {
            let tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate('likes');
            return tweet
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}
export default TweetRepository;