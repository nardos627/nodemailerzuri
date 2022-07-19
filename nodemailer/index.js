const express = require('express')
const app = express();
// app.use(express.json({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
require('dotenv').config();
//const port = process.env.PORT;
const user = process.env.USER;
const pass = process.env.PASS;
const port = 3000;
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({

    host: "smtp.elasticemail.com",
    port: 2525,
    auth: {
        user: user,
        pass: pass
    },
    tls: {
        rejectUnauthorized: true
    }
});

let message =
{
    from: 'nardoshaddis5@gmail.com',
    to: 'nardoshaddis5@gmail.com',
    subject: 'You have recieved a message ',
    attachments: {
        filename: "You've been got",
        path: "./err.png"
    },
    text: 'Please reply me as soon as possible'
};

//  transporter.sendMail(message, (err, data)=>{
//     if (err){
//         console.log( err)
//     }
//     else{
//         console.log("Mail Sent Successfully")
//     }
//  }) 

try {
    transporter.sendMail(message, () => {
        console.log('Mail sent successfully')
    });

} catch (err) {
    console.log(err)
}





app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})