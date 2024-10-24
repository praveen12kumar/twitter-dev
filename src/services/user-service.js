import {CrudRepository, UserRepository} from "../repository/index.js";

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
        this.crudRepository = new CrudRepository(this.userRepository);
    }

    async signUp(data){
         try {
            const user = await this.userRepository.create(data);
            return user;
         } catch (error) {
            console.log(error);
            throw error;  
         }
    }
}

export default UserService;