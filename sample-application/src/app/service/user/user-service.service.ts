import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseURL = `https://gorest.co.in/public/v2/users`

   getAllData() : Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5');
    return this.http.get(`${this.baseURL}`);
 }
 
}
