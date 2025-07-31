import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService {
    private apiUrl = 'http://localhost:8080/api/students';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl);
    }

    getById(id: number): Observable<Student> {
        return this.http.get<Student>(`${this.apiUrl}/${id}`);
    }

    create(student: Student): Observable<Student> {
        return this.http.post<Student>(this.apiUrl, student);
    }

    update(id: number, student: Student): Observable<Student> {
        return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
