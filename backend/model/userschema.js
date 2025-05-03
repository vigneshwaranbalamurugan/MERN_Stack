import mongoose from "mongoose";
import bcrypt from "mongoose-bcrypt"

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username is already taken'],
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        lowercase: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        bcrypt: true
}
   
}
, { timestamps: true });


userschema.plugin(bcrypt);


userschema.methods.comparePassword = async function (password) {
    try {
        const isMatch = await this.verifyPassword(password);
        return isMatch;
    }
    catch (error) {
        console.error('Error comparing password:', error);
        throw new Error('Error comparing password');
    }
  };

const user = mongoose.model('User', userschema);
export default user;