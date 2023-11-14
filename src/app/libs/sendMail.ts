var nodemailer = require('nodemailer');

interface FormData {
  name: string;
  email: string;
  message: string;
  companyArtistName: string;
  quantities: any;
  projectDesc: string;
  file: any;
}

export async function sendMail(formData: FormData) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'mbcontactform@gmail.com',
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
  });

  var mailOptions = {
    from: 'Merchbox Website',
    to: 'itestaiyo@gmail.com',
    subject: 'New Contact Form Submission',
    text: JSON.stringify(formData),
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        reject(new Error('sendMail error: ' + error));
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info.response);
      }
    });
  });
}
