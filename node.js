var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bloggerbytesinfo@gmail.com',
    pass: 'mrmanjunathams'
  }
});

var mailOptions = {
    from: 'bloggerbytesinfo@gmail.com',
    to: 'mrmanjunathams@gmail.com',
    subject: 'Welcome',
    text: 'Welcome to Udhyog',
   html: 'http://www.trigger2k18.com/'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });