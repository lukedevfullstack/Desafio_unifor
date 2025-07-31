import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../model/teacher.model';

@Component({
    selector: 'app-teacher-edit',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <h2>Edit Teacher</h2>
    <form *ngIf="teacher" (ngSubmit)="update()">
      <input [(ngModel)]="teacher.name" name="name" required />
      <input [(ngModel)]="teacher.email" name="email" required />
      <input [(ngModel)]="teacher.department" name="department" required />
      <button type="submit">Update</button>
    </form>
  `
})
export class TeacherEditComponent {
    teacher!: Teacher;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TeacherService
    ) {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.service.getById(id).subscribe(data => this.teacher = data);
    }

    update(): void {
        if (!this.teacher.id) return;
        this.service.update(this.teacher.id, this.teacher).subscribe(() => this.router.navigate(['/teachers']));
    }
}
