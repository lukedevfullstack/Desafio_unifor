import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseService {
    private api = '/api/courses';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Course[]> {
        return this.http.get<Course[]>(this.api);
    }

    create(course: Course): Observable<Course> {
        return this.http.post<Course>(this.api, course);
    }

    update(course: Course): Observable<Course> {
        return this.http.put<Course>(`${this.api}/${course.id}`, course);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.api}/${id}`);
    }
}
