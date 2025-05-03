import OtpService from "../services/otpservice.js";
import { sendEmail } from "../utils/sendEmail.js";

export const generateOtp = async (req, res) => {
    try{
        const {email}=req.params;
        const otpData=await OtpService.generateOtp(email);
        if(otpData){
            sendEmail({
                email:email,
                subject:"OTP for verification",
                message:`<p color="green">Your OTP is ${otpData.otp}</p>`
            });
            res.status(200).json({
                success:true,
                message:"OTP generated successfully",
            
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error generating OTP: ' + error.message
        });
    }
}


export const verifyOtp = async (req,res) =>{
    try{
        const {email,otp}=req.body;
        const isCorrect= await OtpService.verifyOtp(email,otp);
        if(isCorrect){
            res.status(200).json({
                success:true,
                message:"Otp Verified SuccessFully"
            });
        }else{
            res.status(404).json({
                success:false,
                message:"Otp Verification Failed"
            });
        }
    }catch (error){
        res.status(500).json({message:error.message});
    }
}