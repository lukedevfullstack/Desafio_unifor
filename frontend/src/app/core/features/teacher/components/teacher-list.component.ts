import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../model/teacher.model';

@Component({
    selector: 'app-teacher-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <h2>Teacher List</h2>
    <a routerLink="/teachers/create">New Teacher</a>
    <ul>
      <li *ngFor="let teacher of teachers">
        {{ teacher.name }} ({{ teacher.email }})
        <a [routerLink]="['/teachers/view', teacher.id]">View</a>
        <a [routerLink]="['/teachers/edit', teacher.id]">Edit</a>
        <button (click)="delete(teacher.id)">Delete</button>
      </li>
    </ul>
  `
})
export class TeacherListComponent {
    teachers: Teacher[] = [];

    constructor(private service: TeacherService) {
        this.service.getAll().subscribe(data => this.teachers = data);
    }

    delete(id: number | undefined): void {
        if (!id) return;
        this.service.delete(id).subscribe(() => {
            this.teachers = this.teachers.filter(t => t.id !== id);
        });
    }
}
