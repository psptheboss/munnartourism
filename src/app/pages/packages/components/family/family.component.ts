import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {test} from './x'
// import {sendMail} from "../../../../../../app"

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  
   
  }
  
  winOpen007(e){
    var mm=window.open("#/trip007", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen008(e){
    var mm=window.open("#/trip008", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen009(e){
    var mm=window.open("#/trip009", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen010(e){
    var mm=window.open("#/trip010", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen011(e){
    var mm=window.open("#/trip011", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen012(e){
    var mm=window.open("#/trip012", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
    
}
