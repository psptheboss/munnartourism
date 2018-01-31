import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {


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
  constructor(private afs:AngularFirestore) { }
  
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
    
  }
  getPost(postId){
    this.postDoc =this.afs.doc('/posts/'+postId);
    this.post = this.postDoc.valueChanges();
    }
    
    deletePost(postId){
      this.afs.doc('posts/'+postId).delete();
    }
  
 
}
