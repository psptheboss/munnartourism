import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rip008',
  templateUrl: './trip008.component.html',
  styleUrls: ['./trip008.component.scss']
})
export class Trip008 implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closePop(e){
    setTimeout(function(){
    
       window.close();
      }, 100 );
    }
}
