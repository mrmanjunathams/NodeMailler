var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'some@gmail.com',
    pass: 'pass'
  }
});

var mailOptions = {
    from: 'some@gmail.com',
    to: 'some@gmail.com',
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
