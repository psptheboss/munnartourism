import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trip006',
  templateUrl: './trip006.component.html',
  styleUrls: ['./trip006.component.scss']
})
export class Trip006 implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closePop(e){
    setTimeout(function(){
    
       window.close();
      }, 100 );
    }
}
