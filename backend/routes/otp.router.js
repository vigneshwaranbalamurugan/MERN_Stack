import { generateOtp, verifyOtp } from "../controller/otp.controller.js";


import express from 'express';

const otpRouter = express.Router();

otpRouter.get('/generate/:email', generateOtp);
otpRouter.post('/verifyotp',verifyOtp);

export default otpRouter;