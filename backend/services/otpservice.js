import Otp from "../model/otpSchema.js";

class otpService {
        async generateOtp(email) {
        try {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            let otpData=await Otp.findOne({email});

            if(!otpData){
              otpData = await Otp.create({ email, otp });
            }else{
                otpData.otp=otp;
                await otpData.save();
            }
            return otpData;
        } catch (error) {
            throw new Error('Error generating OTP: ' + error.message);
        }
    };

    async verifyOtp(email,otp){
            try{
                let user= await Otp.findOne({email});

                if(user && user.isVerified === true){
                    throw new Error('OTP has already been verified.');
                }else if(user && user.otp === otp)  {
                    const result = await Otp.updateOne(
                        { email },
                        { $set: { 
                            isVerified: true, 
                            createdAt: new Date(Date.now() + 1000 * 60 * 30),        
                     } }
                    );        
                    return true;
                } else {
                    return false;
                }
    
            } catch (error) {
                throw new Error('Error verifying OTP: ' + error.message);
            }
    }

};

const OtpService = new otpService();
export default OtpService;
