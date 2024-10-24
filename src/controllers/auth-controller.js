import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async(req,res)=>{
    try {
        const  {email, password, name} = req.body;
        const response = await userService.signUp({
            email,
            password,
            name
        })

        res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:"User created successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error
        })
    }
}