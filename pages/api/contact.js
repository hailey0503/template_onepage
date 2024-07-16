import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Log to check if environment variables are loaded correctly
    console.log('EMAIL:', process.env.EMAIL);
    console.log('PW:', process.env.PW ? 'Password loaded' : 'Password not loaded');

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PW,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL, // Change to your email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.response);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email.', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
};
