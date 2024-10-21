import Hashtag from "../models/hashtag.model.js";

class HashtagRepository{

    async create(data){
        try {
            const hashtag = await Hashtag.create(data);
            return hashtag
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllHashtag(){
        try {
            const hashtags = await Hashtag.find();
            return hashtags
        } catch (error) {
            console.log(error);
            throw error 
        }
    } 


    async get(id){
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try {
            const response = await Hashtag.findByIdAndDelete(id);
            return response
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({title: {$in: titleList}});
           
            return tags
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};


export default HashtagRepository;