import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginCredentials } from './login-credentials.model';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    public getUsers(): Observable<Array<LoginCredentials>> {
        return this.http.get<Array<LoginCredentials>>(`users/users.json`);
    }
}
