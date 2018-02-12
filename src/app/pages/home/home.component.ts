import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './custom-toast';
import {newMailRecords} from './home';
import {sendMail} from './home';
import { Http, Response , Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Body } from '@angular/http/src/body';



interface Post{
  fname:string;
  lname:string;
  email:string;
  mobile:string;
  place:string;
  content:string;
}
interface PostId extends Post{
  id:string;
  fname:string;
  lname:string;
  email:string;
  mobile:string;
  place:string;
  content:string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  postCol: AngularFirestoreCollection<Post>;
  posts:any;

  fname:string;
  lname:string;
  email:string;
  mobile:string;
  place:string;
  content:string;

newEmail={
  fname:"",
  lname:"",
  email:"",
  
  mobile:"",
  place:"",
  content: ""
  
  
  

}

  

  postDoc:AngularFirestoreDocument<Post>;
  post:Observable<Post>;
  constructor(private afs:AngularFirestore,public toastr: ToastsManager,public vcr: ViewContainerRef,public http:Http) {
    this.toastr.setRootViewContainerRef(vcr);
   }
  
   



  ngOnInit() {
    this.postCol = this.afs.collection('posts');
    this.posts = this.postCol.snapshotChanges()
    .map(actions =>{
    return actions.map(a => {
      const data = a.payload.doc.data() as Post;
      const id=a.payload.doc.id;
      return { id,data};

         })
    })
    // newMailRecords();
    // sendMail();  
   
    
  
  }

  sendEmail(){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
 
this.http.post('/sendEmail',JSON.stringify(this.newEmail),{headers:headers})
    
    .subscribe(
      data => console.log(data),
      err => console.log("Errorr"),
      () => console.log('Random Quote Complete')
    )
  }  
  
  addPost(e) {
    if(this.newEmail.fname != "" &&  this.newEmail.lname != "" &&  this.newEmail.place != ""&&  this.newEmail.email != ""&&  this.newEmail.content != ""&&  this.newEmail.mobile != ""){
      this.afs.collection('posts').add({'fname': this.newEmail.fname, 'lname': this.newEmail.lname,'email': this.newEmail.email,'mobile': this.newEmail.mobile,'place': this.newEmail.place,'content': this.newEmail.content});
      this.toastr.success('Saved!');
      this.newEmail.fname = null;
      this.newEmail.lname = null;
      this.newEmail.email = null;
      this.newEmail.content = null;
      this.newEmail.mobile = null;
      this.newEmail.place = null;
    }
    else{
      this.toastr.error('Please check your input Fields');
    }

  }
  getPost(postId){
    this.postDoc =this.afs.doc('/posts/'+postId);
    this.post = this.postDoc.valueChanges();
    }
    
    deletePost(postId){
      this.afs.doc('posts/'+postId).delete();
    }
  
 
  show(){
    var myDiv = document.getElementById('first');
    myDiv.style.display = "block"
  }
  

  loginUser(e){
    e.preventDefault();
    var x = document.getElementsByTagName("STYLE")[0];
    document.getElementById("myH1").style.display = "block";

    console.log(x)
  }

  clearInput(){
    this.newEmail.fname = null;
    this.newEmail.lname = null;
    this.newEmail.email = null;
    this.newEmail.content = null;
    this.newEmail.mobile = null;
    this.newEmail.place = null;
    
  }
  
}
