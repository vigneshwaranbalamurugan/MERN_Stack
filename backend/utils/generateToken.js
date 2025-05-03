import jwt from "jsonwebtoken";

export const generateAuthToken = function (user) {
    const payload = {
      id: user._id,
      email: user.email,
      username: user.username,
    };
  
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d", 
    });
  
    return token;
  };