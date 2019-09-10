import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://5d33e74dbecf3e0014ae57ab.mockapi.io/Users');
  }
}
