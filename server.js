const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure your Gmail credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aizaziqbal11@gmail.com',      // Replace with your Gmail
            pass: 'pvirzjrfsmsvoein'         // Use an App Password, not your Gmail password
        }
    });

    const mailOptions = {
        from: email,
        to: 'aizaziqbal11@gmail.com',           // Your Gmail again
        subject: `Portfolio Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send message.', error });
    }
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});