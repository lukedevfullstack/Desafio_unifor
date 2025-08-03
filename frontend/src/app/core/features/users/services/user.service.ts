import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    private api = '/api/users';

    constructor(private http: HttpClient) { }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.api);
    }

    getById(id: number): Observable<User> {
        return this.http.get<User>(`${this.api}/${id}`);
    }

    create(user: User): Observable<User> {
        return this.http.post<User>(this.api, user);
    }

    update(user: User): Observable<User> {
        return this.http.put<User>(`${this.api}/${user.id}`, user);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.api}/${id}`);
    }
}
