import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../model/teacher.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TeacherService {
    private readonly api = 'http://localhost:8080/api/teachers';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Teacher[]> {
        return this.http.get<Teacher[]>(this.api);
    }

    getById(id: number): Observable<Teacher> {
        return this.http.get<Teacher>(`${this.api}/${id}`);
    }

    create(teacher: Teacher): Observable<Teacher> {
        return this.http.post<Teacher>(this.api, teacher);
    }

    update(id: number, teacher: Teacher): Observable<Teacher> {
        return this.http.put<Teacher>(`${this.api}/${id}`, teacher);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.api}/${id}`);
    }
}
