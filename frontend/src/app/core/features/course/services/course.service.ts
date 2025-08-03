import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
    private baseUrl = '/api/courses';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Course[]> {
        return this.http.get<Course[]>(this.baseUrl);
    }

    getById(id: number): Observable<Course> {
        return this.http.get<Course>(`${this.baseUrl}/${id}`);
    }

    create(course: Course): Observable<Course> {
        return this.http.post<Course>(this.baseUrl, course);
    }

    update(id: number, course: Course): Observable<Course> {
        return this.http.put<Course>(`${this.baseUrl}/${id}`, course);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
