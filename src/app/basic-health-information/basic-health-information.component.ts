import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-basic-health-information',
  templateUrl: './basic-health-information.component.html',
  styleUrls: ['./basic-health-information.component.scss']
})
export class BasicHealthInformationComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }
  private user_id = "1";
  public data_fetched = false;
  public info: any;

  ngOnInit(): void {
    this.databaseService.end_point = 'api/v1/my_basic_health_information';
    this.getBasicHealthInform();
  }

  /**
   * getBasicHealthInform
   */
  public getBasicHealthInform() {
    this.data_fetched = false;
    this.databaseService.getItemById(this.user_id)
      .pipe(map((result: any) => {
        if (true) {
          result.cognitivesymptoms = result.cognitivesymptoms.replaceAll('_', ' ');
          return result;
        }
        return result;

      }))
      .subscribe((result: any) => {
        this.data_fetched = true;
        this.info = result;
      });
  }

}
