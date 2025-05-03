import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import otpRouter from "./routes/otp.router.js";
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
import cors from "cors";
// import userRouter from "./routes/user.router.js";
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi");
});

// app.use("/api/user", userRouter);

app.use("/api/otp", otpRouter);

app.listen(PORT, () => console.log(`${PORT}`))