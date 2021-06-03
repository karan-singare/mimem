import {Component, OnInit} from '@angular/core';
import {DoctorService} from './doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mimem';
  serverResponse: any;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit(): void {
  }
}
