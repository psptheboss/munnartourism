import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trip012',
  templateUrl: './trip012.component.html',
  styleUrls: ['./trip012.component.scss']
})
export class Trip012 implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closePop(e){
    setTimeout(function(){
    
       window.close();
      }, 100 );
    }
}
