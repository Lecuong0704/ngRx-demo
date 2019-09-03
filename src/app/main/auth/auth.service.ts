import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('https://5d33e74dbecf3e0014ae57ab.mockapi.io/users');
  }
}
