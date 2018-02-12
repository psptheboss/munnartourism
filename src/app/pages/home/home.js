$(".input").focus(function() {
    $(this).parent().addClass("focus");
})



var newMailRecords = function(){
    this.newMail = {
      fname:null,
      lname:null,
      email:null,
      mobile:null,
      place:null,
      content:null
    }
}
// var sendMail = function(){
//     $http.post('http://10.14.151.217:3080/saveMail',angular.toJson(this.newMail),{
//         headers:{
//             'content-Type':'application/json;charset=utf-8'
//         }
//     })
//     success(function (data,status){
//         console.log("Mail Sent")
//     })
// }

exports.sendMail = sendMail;
exports.newMailRecords = newMailRecords;
