import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import cors from 'cors';

const resend = new Resend(process.env.RESEND_API_KEY);

const corsMiddleware = cors({
  origin: 'http://localhost:3000', // You can specify specific origins here or use '*' for all origins (for development)
  methods: ['GET', 'POST'], // Specify the allowed HTTP methods
});

export async function POST(req: any, res: any) {
  console.log(process.env.RESEND_API_KEY);
  console.log('API route hit');

  await new Promise<void>((resolve, reject) => {
    corsMiddleware(req, res, (err?: Error) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });

  if (req.method === 'POST') {
    try {
      const formData = JSON.parse(req.body);

      const data = await resend.emails.send({
        from: 'merchbox website',
        to: 'mphill05@gmail.com',
        subject: 'Contact Form Submission',
        html: formData,
      });

      res.status(200).json(data);
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).end();
  }
}
