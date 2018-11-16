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
    subject: 'Welcome Note',
    text: 'Welcome to Bloggerbytes',
   html: '<html lang="en"><head><title>Bloggerbytesinfo</title><link rel="stylesheet" href="style.css"><link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Fjalla+One|Merriweather" rel="stylesheet"><link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script><style type="text/css"> .row .col a{background-color: white;border: 2px solid black;} .row .col i{color: black;font-size: 120%;} .row .col a:hover{background-color: black} .row .col i:hover{color:white;}</style></head><body style="background-color: #99ebff;"><div class="row"><div class="col s3"></div><div class="col s6" style="background-color: #ffffff;"><br><img src="https://image.ibb.co/n53MH0/logoalt.png" alt="logo" width="50%" style="margin-left: 25%;"><h3 style="text-align: center;font-family: Anton;">Publish your passions, your way</h3><h5 style="text-align: center;font-family: Fjalla One;">Create a unique and beautiful blog. Its easy and free.</h5><h4 style="font-family: Mukta Mahee; text-align: center;">WelCome to Bloggerbytes.<br>We are happy to see you here.</h4></div><div class="col s3"></div></div></body></html>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
