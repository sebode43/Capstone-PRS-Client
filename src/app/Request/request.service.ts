import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';


const url:string = "http://localhost:5000/api/requests"

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  list():Observable <Request[]> {
    return this.http.get(`${url}`) as Observable<Request[]>;
  }
  get(id: any):Observable <Request> {
    return this.http.get(`${url}/${id}`) as Observable<Request>;
  }
  create(request: Request):Observable <Request> {
    return this.http.post(`${url}`, request) as Observable<Request>;
  }
  change(request: Request):Observable <any> {
    return this.http.put(`${url}/${request.id}`, request) as Observable<any>;
  }
  remove(request: Request):Observable <any> {
    return this.http.delete(`${url}/${request.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
