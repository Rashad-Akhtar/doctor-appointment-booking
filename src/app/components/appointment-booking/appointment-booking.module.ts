import { NgModule } from '@angular/core';
import { AppointmentBookingComponent } from './appointment-booking.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { TimeSlotsComponent } from './time-slots/time-slots.component';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { AppointmentDialogModule } from 'src/app/dialogs/appointment-dialog/appointment-dialog.module';


@NgModule({
    declarations: [
        AppointmentBookingComponent,
        CalendarViewComponent,
        TimeSlotsComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatNativeDateModule,
        MatDatepickerModule,
        AppointmentDialogModule
    ]
})

export class AppointmentBookingModule {}