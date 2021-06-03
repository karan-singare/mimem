import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicHealthInformationComponent } from './basic-health-information/basic-health-information.component';
import { BasicHealthInformationUpdateComponent } from './basic-health-information/basic-health-information-update/basic-health-information-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basic-health-information', component: BasicHealthInformationComponent },
  { path: 'basic-health-information/update', component: BasicHealthInformationUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
