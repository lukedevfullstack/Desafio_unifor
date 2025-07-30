import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Semester } from '../models/semester.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SemesterService {
    private api = '/api/semesters';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Semester[]> {
        return this.http.get<Semester[]>(this.api);
    }

    create(semester: Semester): Observable<Semester> {
        return this.http.post<Semester>(this.api, semester);
    }

    update(semester: Semester): Observable<Semester> {
        return this.http.put<Semester>(`${this.api}/${semester.id}`, semester);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.api}/${id}`);
    }
}
