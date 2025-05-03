import mongoose from "mongoose";

const otpSchema= mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        lowercase: true,
    },
    otp: {
        type: String,
        required: [true, 'OTP is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600 // OTP expires in 10 minutes
    },
    isVerified:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

const Otp = mongoose.model('Otp', otpSchema);
export default Otp;