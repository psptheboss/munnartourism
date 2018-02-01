import {Component} from '@angular/core';
import * as jQuery from 'jquery';

import {CalendarService} from './calendar.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.scss']
})
export class Calendar {

  public calendarConfiguration:any;
  private _calendar:Object;

  constructor(private _calendarService:CalendarService) {
    this.calendarConfiguration = this._calendarService.getData();

  }

  public onCalendarReady(calendar):void {
    this._calendar = calendar;
  }

}
