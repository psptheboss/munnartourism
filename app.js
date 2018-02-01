var express        = require('express');  

// var bodyParser     = require('body-parser');
var path = require("path");
var app            = express();  
var router         = express.Router();


// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', 'http://localhost:3080');
    next();	
});


app.listen(process.env.PORT || 3080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', router);


// var email 	= require("emailjs");
// var server 	= email.server.connect({
//     user:    "pspalavesam", 
//     password:"palavesh@8870", 
//     host:    "smtp.gmail.com", 
//     ssl:     true
//  });
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




