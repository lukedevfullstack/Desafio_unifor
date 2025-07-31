import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Discipline } from '../models/discipline.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DisciplineService {
    private api = '/api/disciplines';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Discipline[]> {
        return this.http.get<Discipline[]>(this.api);
    }

    create(discipline: Discipline): Observable<Discipline> {
        return this.http.post<Discipline>(this.api, discipline);
    }

    update(discipline: Discipline): Observable<Discipline> {
        return this.http.put<Discipline>(`${this.api}/${discipline.id}`, discipline);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.api}/${id}`);
    }
}
