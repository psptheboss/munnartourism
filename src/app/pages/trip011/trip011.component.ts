import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trip011',
  templateUrl: './trip011.component.html',
  styleUrls: ['./trip011.component.scss']
})
export class Trip011 implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closePop(e){
    setTimeout(function(){
    
       window.close();
      }, 100 );
    }
}
