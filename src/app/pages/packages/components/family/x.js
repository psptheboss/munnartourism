
var email 	= require("emailjs/email");
var server 	= email.server.connect({
    user:    "pspalavesam", 
    password:"palavesh@8870", 
    host:    "smtp.gmail.com", 
    ssl:     true
 });

function test(){
    console.log("working");
    server.send({
        text:    "Chinchang valga", 
        from:    "pspalavesam@gmail.com", 
        to:      "pspalavesam@gmail.com",
        cc:      "loganadhan007@gmail.com",
        subject: "testing emailjs"
     }, function(err, message) { console.log(err || message); });
     console.log("ok");
}



exports.test = test;