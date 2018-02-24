
  var email 	= require("emailjs");
  var server 	= email.server.connect({
      user:    "pspalavesam", 
      password:"palavesh@8870", 
      host:    "smtp.gmail.com", 
      ssl:     true
   });
 // send the message and get a callback with an error or details of the message that was sent
 
 function test(){
     server.send({
         text:    "i hope this works", 
         from:    "pspalavesam@gmail.com", 
         to:      "pspalavesam@gmail.com",
      //    cc:      "else <else@your-email.com>",
         subject: "testing emailjs"
      }, function(err, message) { console.log(err || message); });
      console.log("ok");
 }


