import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trip009',
  templateUrl: './trip009.component.html',
  styleUrls: ['./trip009.component.scss']
})
export class Trip009 implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closePop(e){
    setTimeout(function(){
    
       window.close();
      }, 100 );
    }
}
