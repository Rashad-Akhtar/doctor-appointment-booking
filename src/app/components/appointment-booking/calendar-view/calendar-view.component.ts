import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
 
  @Input() availableDayNumbers: Array<number> = [];

  selected: Date | null = null;
  minDate: Date = new Date();

  selectableDatesFilter = (d: Date): boolean => {
    const day = d.getDay();
    return this.availableDayNumbers.includes(day);
  }

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  dateChange(event: any) {
    const day_name = moment(event).format('ddd');
    this.sharedService.changeDay(day_name.toLowerCase());
  }

}
