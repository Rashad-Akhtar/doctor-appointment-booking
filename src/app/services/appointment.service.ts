import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DoctorsList } from 'src/app/types/doctors';
import { DOCTORS_DATA } from 'src/assets/data';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  doctorsData: Array<DoctorsList> = DOCTORS_DATA;

  constructor(private router: Router,
              private snackBar: MatSnackBar) { }

  resolve(route: ActivatedRouteSnapshot) {
    const doctor_id = route.params['id'];
    return this.getDoctorDetails(doctor_id);
  }

  getDoctorDetails(id: number) {
    const doctor = this.doctorsData.find((item) => item.id == id);
    if(doctor) {
      let availability: Array<number> = [];
      const keys = doctor ? Object.keys(doctor.availability) : null;
      keys?.forEach((value: string) => {
         availability.push(this.getDayNumber(value));
      })
  
      return {
        availableDayNumbers: availability,
        timings: doctor?.availability,
        visitDuration: doctor?.visitDurationInMin
      }
    } else {
      this.redirectToHome();
      return;
    }
  }

  getDayNumber(day: string) {
    switch(day) {
      case "sun": return 0;
      case "mon": return 1;
      case "tue": return 2;
      case "wed": return 3;
      case "thu": return 4;
      case "fri": return 5;
      case "sat": return 6;           
    }
    return 0;
  }

  redirectToHome() {
    this.router.navigate(['/']);
    this.snackBar.open('No Doctor Found', '', {
      duration: 3000,
      horizontalPosition: 'left',
    });
  }
}
