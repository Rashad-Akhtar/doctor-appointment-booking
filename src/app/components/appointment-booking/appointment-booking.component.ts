import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.scss']
})
export class AppointmentBookingComponent implements OnInit {
  availableDayNumbers: Array<number> = [];
  timings: Object = {};
  visitDuration: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ appointmentDetails }) => {
       this.availableDayNumbers = appointmentDetails.availableDayNumbers;
       this.timings = appointmentDetails.timings;
       this.visitDuration = appointmentDetails.visitDuration; 
    })
  }

}
