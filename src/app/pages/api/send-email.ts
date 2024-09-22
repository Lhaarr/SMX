// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: email,
        to: 'larshaarr01@gmail.com', // Replace with the recipient email
        subject: `New message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      });

      // Send JSON response
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error("Error while sending email:", error);

      // Send JSON error response
      res.setHeader('Content-Type', 'application/json');
      return res.status(500).json({ message: 'Error sending email', error: (error as Error).message });
    }
  } else {
    // Send JSON response for invalid methods
    res.setHeader('Content-Type', 'application/json');
    return res.status(405).json({ message: 'Method not allowed' });
  }
}