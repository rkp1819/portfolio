require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: [String]
});

const Client = mongoose.model("Client", clientSchema);

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/contact", function (req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message;
    const mailOptions = {
        from: email,
        to: process.env.MAIL_ME,
        subject: 'Portfolio Contact ' + name,
        text: message + " from " + email,
        html: "<h1>Your Portfolio got some hits!</h1><p>You got a new client</p>"
    };
    Client.findOne({ email: email }, function (err, result) {
        if (err) return { successful: false, emsg: err.message, ecode: err.code };
        else if (result) {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            Client.updateOne({ _id: result._id }, { $push: { message: message } }, function (error) {
                if (!error) {
                    res.redirect("/");
                }
            })
        }
        else {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            const client = new Client({
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            });
            client.save(function (err) {
                if (!err) {
                    res.redirect("/");
                }
            })
        }
    });
});

app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Server Started!");
});
