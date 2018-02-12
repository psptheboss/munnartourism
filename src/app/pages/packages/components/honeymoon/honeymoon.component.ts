import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honeymoon',
  templateUrl: './honeymoon.component.html',
  styleUrls: ['./honeymoon.component.scss']
})
export class HoneymoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closeWin(){
    window.close();
  }
  winOpen001(e){
    var mm=window.open("#/trip001");
    if(mm.closed==true){
      console.log("closed")
    }
  
  } 
  winOpen002(e){
    var mm=window.open("#/trip002", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen003(e){
    var mm=window.open("#/trip003", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen004(e){
    var mm=window.open("#/trip004",);
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen005(e){
    var mm=window.open("#/trip005");
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  winOpen006(e){
    var mm=window.open("#/trip006", );
    if(mm.closed==true){
      console.log("closed")
    }
  
  }
  
}
