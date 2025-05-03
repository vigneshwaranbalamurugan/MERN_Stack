import user from "../model/userschema.js";


class userService{
    async createUser(userData) {
        try {
            const newUser = await user.create(userData);
            return newUser;
        } catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }

    async findUserByEmail(email) {
        try {
            const foundUser = await user.findOne({ email });
            return foundUser;
        } catch (error) {
            throw new Error('Error finding user: ' + error.message);
        }
    }

    async findUserById(id) {
        try {
            const foundUser = await user.findById(id);
            return foundUser;
        } catch (error) {
            throw new Error('Error finding user: ' + error.message);
        }
    }
}


const userService=new userService();
export default userService;