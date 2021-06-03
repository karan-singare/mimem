import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private base_url = 'http://192.168.0.101:8000/';
  public end_point: string = 'api/v1';

  constructor(private http: HttpClient) { }

  getAllItems(): any {
    return this.http
      .get(this.base_url + this.end_point);
  }

  getItemById(id: string): any {
    return this.http
      .get(this.base_url + this.end_point + '/' + id);
  }

  updateItemById(id: string, data: any): any {
    return this.http
    .put(
      this.base_url + this.end_point + '/' + id + '/',
      data
    );
  }
}
