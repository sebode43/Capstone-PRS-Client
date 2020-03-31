import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RequestLine } from './requestline.class';
import { HttpClient } from '@angular/common/http';

const url:string = "http://localhost:5000/api/requestlines"

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  get(id: any):Observable <RequestLine> {
    return this.http.get(`${url}/${id}`) as Observable<RequestLine>;
  }
  create(requestline: RequestLine):Observable <RequestLine> {
    return this.http.post(`${url}`, requestline) as Observable<RequestLine>;
  }
  change(requestline: RequestLine):Observable <any> {
    return this.http.put(`${url}/${requestline.id}`, requestline) as Observable<any>;
  }
  remove(requestline: RequestLine):Observable <any> {
    return this.http.delete(`${url}/${requestline.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
