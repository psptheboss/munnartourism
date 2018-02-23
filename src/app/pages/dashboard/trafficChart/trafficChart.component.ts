import {Component} from '@angular/core';

import {TrafficChartService} from './trafficChart.service';
// import * as Chart from 'chart.js';

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html',
  styleUrls: ['./trafficChart.scss']
})

// TODO: move chart.js to it's own component
export class TrafficChart {

  public doughnutData: Array<Object>;

  constructor(private trafficChartService:TrafficChartService) {
    this.doughnutData = trafficChartService.getData();
  }

  ngAfterViewInit() {
   
  }

  
}
