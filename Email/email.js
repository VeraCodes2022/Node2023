const express=require('express')
const app=express()
// app.get('/',function (req,res){
//     res.json('HELLO WORLD.')
// }).listen(8000)


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zhang.vr@gmail.com',
        pass: 'ilovejukka2021',
    }
});

var mailOptions = {
    from: 'zhang.vr@gmail.com',
    to: 'verazhang2018@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

