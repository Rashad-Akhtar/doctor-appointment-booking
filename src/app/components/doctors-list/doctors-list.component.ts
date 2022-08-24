import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsList } from 'src/app/types/doctors';
import { DOCTORS_DATA } from 'src/assets/data';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  doctorsData: Array<DoctorsList> = DOCTORS_DATA;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  redirectToAppointment(doctor: DoctorsList) {
    this.router.navigate(['/','appointment', 'doctor', doctor.id]);
  }

}
