import { AuthRequest } from './../interface/auth-request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiRoot: string ='http://localhost:8082/api/v1/auth'

  constructor(private http: HttpClient) { }

  public login(authRequest: AuthRequest): Observable<any> {
    console.log("authservice")
    return this.http.post<any>(`${this.apiRoot}`+"/login",authRequest);
  }
}
