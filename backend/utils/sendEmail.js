import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/*--------------------Create Transporter-----------------------*/

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, 
    },
});

/*------------------Send Mail---------------------*/

const sendEmail = (email,subject,message) => {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      text: `${message}`,
      html: `<p>${message}</p>`,
    };
   
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };


export {sendEmail};