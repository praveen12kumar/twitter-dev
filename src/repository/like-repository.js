import Like from "../models/like.model.js";
import {CrudRepository} from "./index.js"

class LikeRepository extends CrudRepository {

    constructor(){
        super(Like)
    }

    async findByUserAndLikeable(data){
        try {
            
            const likes = await Like.findOne(data);
           
            return likes;
        } catch (error) {
            throw error;
        }
    }

}

export default LikeRepository;