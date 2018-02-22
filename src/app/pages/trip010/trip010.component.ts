import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rip010',
  templateUrl: './trip010.component.html',
  styleUrls: ['./trip010.component.scss']
})
export class Trip010 implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closePop(e){
    setTimeout(function(){
    
       window.close();
      }, 100 );
    }
}
