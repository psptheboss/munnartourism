var express        = require('express');  

var bodyParser     = require('body-parser');
var path = require("path");
var app            = express();  
var router         = express.Router();


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', 'http:10.14.151.217:3000');
    next();	
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
app.use(express.static(path.join(__dirname, 'dist')));


app.route('/sendEmail').post(function (req,res){
    console.log(req.body);

    console.log(req.body.lname);
    res.send(JSON.stringify("success"))

    var email 	= require("emailjs/email");
    var server 	= email.server.connect({
        user:    "munnarToursm", 
        password:"munnarToursm18", 
        host:    "smtp.gmail.com", 
        ssl:     true
     });
    
    
      server.send({
           text:    "Do Not Reply",
           from:    "munnarToursm@gmail.com", 
           to:      "pspalavesam@gmail.com",
           cc:      "loganadhan007@gmail.com",
           subject: "Online Enquiry",
           attachment: 
   [
      {data:"<html><table><thead><tr style='background-color:rgb(82, 189, 153)'><th>First Name</th><th>Last Name</th><th>Mobile</th><th>Email</th><th>Place</th><th>Query</th></tr></thead><tbody><tr><td>"+req.body.fname+"</td><td>"+req.body.lname+"</td><td>"+req.body.mobile+"</td><td>"+req.body.email+"</td><td>"+req.body.place+"</td><td>"+req.body.content+"</td></tr></tbody></table></html>", alternative:true}
    
   ]
        }, function(err, message) { console.log(err || message); });
        console.log("ok");
    })
    



app.use('/', router);









// exports.sendMail=sendMail;

// function sss(){
//     console.log("working")
// }
// exports.sss=sss;


