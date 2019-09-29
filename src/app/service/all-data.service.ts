import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
//import { environment } from '/../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  public viewConData = new BehaviorSubject(undefined);
  constructor(private http: HttpClient) { }

  getTableData(){
    return this.http.get('assets/json/tableData.json');

    }
}
