import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentDialogComponent } from './appointment-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppointmentDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [AppointmentDialogComponent]
})
export class AppointmentDialogModule { }
