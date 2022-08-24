import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import * as moment from 'moment';
import {MatDialog} from '@angular/material/dialog';
import { AppointmentDialogComponent } from 'src/app/dialogs/appointment-dialog/appointment-dialog.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-time-slots',
  templateUrl: './time-slots.component.html',
  styleUrls: ['./time-slots.component.scss'],
  animations: [
    trigger('animate', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('.6s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('.6s ease-in-out', style({transform: 'translateX(1000%)'}))
      ])
    ])
  ]
})
export class TimeSlotsComponent implements OnInit, OnDestroy {

  @Input() timeObject: Object = {};
  @Input() visitDuration: number = 0;
  sub: Subscription;
  timeRange: string = '';
  timings: Array<string> = []; 

  constructor(private sharedService: SharedService,
              private dialog: MatDialog) {
    this.sub = sharedService.currentDay.subscribe((res) => {
       this.setTimings(res);
    }); 
  }

  ngOnInit(): void {
  }

  setTimings(day: string) {
    const timings = Object.entries(this.timeObject);
    const timeRange: string = this.getTimeRange(timings, day);
    const splitTime = timeRange.split(' - ');
    const beginningTime = moment(splitTime[0], 'h:mm a');
    const endTime = moment(splitTime[1], 'h:mm a');
    this.constructTimings(beginningTime, endTime);
  }

  getTimeRange(timings: Array<Array<String>>, day: string) {
    let result: string = '';
    timings.forEach((value) => {
      if((value[0] === day)) {
        result = value[1].toString();
      }
   });
   return result;
  }

  constructTimings(startTime: moment.Moment, endTime: moment.Moment) {
    this.timings = [];
    let previousValue: string = '';
    let currentValue: string = '';
    let timeRange: string = '';
    while(startTime.isBefore(endTime)) {
       previousValue = moment(startTime).format('h:mm a');
       startTime = moment(startTime).add(this.visitDuration, 'minutes');
       currentValue = moment(startTime).format('h:mm a');
       timeRange = previousValue + ' - ' + currentValue;
       this.timings.push(timeRange);
    }
  }

  openModal() {
    this.dialog.open(AppointmentDialogComponent, {
      width: '500px',
      height: 'auto'
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
