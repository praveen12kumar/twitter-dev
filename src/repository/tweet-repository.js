import Tweet from "../models/tweet.models.js";

class TweetRepository {
    async createTweet({ content, userEmail, author }) {
        const tweet = await Tweet.create({ content, userEmail, author });
        return tweet;
    }
}
export default TweetRepository;