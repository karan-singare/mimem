import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BasicHealthInformationComponent } from './basic-health-information/basic-health-information.component';
import { DoctorComponent } from './doctor/doctor.component';
import { OngoingMedicationComponent } from './ongoing-medication/ongoing-medication.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { MessagesComponent } from './messages/messages.component';
import { SurgicalDetailsComponent } from './surgical-details/surgical-details.component';
import { FutureAppointmentsComponent } from './future-appointments/future-appointments.component';
import { DigonosticReportsComponent } from './digonostic-reports/digonostic-reports.component';
import { DoctorVisitsComponent } from './doctor-visits/doctor-visits.component';
import { HomeComponent } from './home/home.component';
import { BasicHealthInformationUpdateComponent } from './basic-health-information/basic-health-information-update/basic-health-information-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHealthInformationComponent,
    DoctorComponent,
    OngoingMedicationComponent,
    AllergiesComponent,
    PrescriptionComponent,
    MessagesComponent,
    SurgicalDetailsComponent,
    FutureAppointmentsComponent,
    DigonosticReportsComponent,
    DoctorVisitsComponent,
    HomeComponent,
    BasicHealthInformationUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
