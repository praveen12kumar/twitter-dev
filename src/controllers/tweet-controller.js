import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
       
        const tweet = await tweetService.create(req.body);

        return res.status(201).json({
            success:true,
            message:"Tweet created successfully",
            data:tweet,
            err:{}
        });
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            data:{},
            err:error
        })
    }
};

export const getTweet = async (req, res) => { 
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:"Tweet fetched successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error
        });
    }
}