const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configure the email transport (e.g., SMTP settings)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    // Email data
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'sdmanoj365@example.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.json({ success: false });
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true });
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
