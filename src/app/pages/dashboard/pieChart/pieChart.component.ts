import {Component} from '@angular/core';




@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.html',
  styleUrls: ['./pieChart.scss']
})
// TODO: move easypiechart to component
export class PieChart {

  public charts: Array<Object>;
  private _init = false;

  constructor(  ) {
  
  }

  ngAfterViewInit() {
  
    }
  }


   