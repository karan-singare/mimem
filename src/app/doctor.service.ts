import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private http: HttpClient) {
  }

  getResponse(): any {
    this.http
      .get(
        'http://192.168.0.101:8000/api/v1',
        {
          // headers: new HttpHeaders({
          //   'Access-Control-Allow-Origin': '*'
          // })
        }
      )
      .subscribe((response) => {
        console.log(response);
        return response;
      });
  }

}
