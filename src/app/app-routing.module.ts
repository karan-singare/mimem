import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicHealthInformationComponent } from './basic-health-information/basic-health-information.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basic-health-information', component: BasicHealthInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
