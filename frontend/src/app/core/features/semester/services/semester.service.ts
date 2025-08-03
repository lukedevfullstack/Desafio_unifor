import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Semester } from '../interfaces/semester.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SemesterService {
    private apiUrl = 'http://localhost:8080/api/semesters';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Semester[]> {
        return this.http.get<Semester[]>(this.apiUrl);
    }

    getById(id: number): Observable<Semester> {
        return this.http.get<Semester>(`${this.apiUrl}/${id}`);
    }

    create(semester: Semester): Observable<Semester> {
        return this.http.post<Semester>(this.apiUrl, semester);
    }

    update(id: number, semester: Semester): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, semester);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
