import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../model/teacher.model';

@Component({
    selector: 'app-teacher-create',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <h2>Create Teacher</h2>
    <form (ngSubmit)="save()">
      <input [(ngModel)]="teacher.name" name="name" placeholder="Name" required />
      <input [(ngModel)]="teacher.email" name="email" placeholder="Email" required />
      <input [(ngModel)]="teacher.department" name="department" placeholder="Department" required />
      <button type="submit">Save</button>
    </form>
  `
})
export class TeacherCreateComponent {
    teacher: Teacher = { name: '', email: '', department: '' };

    constructor(private service: TeacherService, private router: Router) { }

    save(): void {
        this.service.create(this.teacher).subscribe(() => this.router.navigate(['/teachers']));
    }
}
