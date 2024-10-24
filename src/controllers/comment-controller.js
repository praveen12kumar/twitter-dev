import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res)=>{
    const {modelType, modelId} = req.query;
    const {userId, content} = req.body;
    try {
        
        const response = await commentService.create(modelId, modelType, userId, content);
        return res.status(201).json({
            success:true,
            message:"Comment created successfully",
            data:response,
            err:{},
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error,
        })
    }
}