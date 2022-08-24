import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentBookingComponent } from './components/appointment-booking/appointment-booking.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { AppointmentService } from './services/appointment.service';

const routes: Routes = [
  { 
    path: '', 
    component: DoctorsListComponent 
  },
  { 
    path: 'appointment/doctor/:id', 
    component: AppointmentBookingComponent,
    resolve: {
      appointmentDetails: AppointmentService
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
