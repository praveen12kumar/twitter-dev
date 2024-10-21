// Business logic comes here
import { TweetRepository, HashtagRepository } from "../repository/index.js"



class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        // tags => all the tags used in the tweet
        const tags = content.match(/#[a-zA-Z0-9]+/g).map((tag) => tag.substring(1)); // this regex extract hashtags
        
         // tweet created 
        const tweet = await this.tweetRepository.create(data);
      
        
        const alreadyPresentTags = (await this.hashtagRepository.findByName(tags));
        
        let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
        
        let newTags = tags.filter((tag)=> !titleOfPresentTags.includes(tag));
        
        newTags = newTags.map((tag) => ({title: tag, tweets: [tweet._id]}));
        //console.log("newTags",newTags);

        await this.hashtagRepository.bulkCreate(newTags);

        //console.log("response",response);
        // update the already present tags with tweet id
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet._id);
            tag.save();
        });

        return tweet;
    }

}

export default TweetService