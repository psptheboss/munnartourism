import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './custom-toast';


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


  

  postDoc:AngularFirestoreDocument<Post>;
  post:Observable<Post>;
  constructor(private afs:AngularFirestore,public toastr: ToastsManager,public vcr: ViewContainerRef) {
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

  }
  addPost(e) {
    this.afs.collection('posts').add({'fname': this.fname, 'lname': this.lname,'email': this.email,'mobile': this.mobile,'place': this.place,'content': this.content});
    this.toastr.success('Saved!');
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
  
}
