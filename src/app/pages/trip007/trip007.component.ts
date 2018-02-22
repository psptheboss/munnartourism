import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trip007',
  templateUrl: './trip007.component.html',
  styleUrls: ['./trip007.component.scss']
})
export class Trip007 implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closePop(e){
    setTimeout(function(){
    
       window.close();
      }, 100 );
    }
}
