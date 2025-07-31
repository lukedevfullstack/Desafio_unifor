import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../model/teacher.model';

@Component({
    selector: 'app-teacher-view',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h2>Teacher Details</h2>
    <div *ngIf="teacher">
      <p><strong>Name:</strong> {{ teacher.name }}</p>
      <p><strong>Email:</strong> {{ teacher.email }}</p>
      <p><strong>Department:</strong> {{ teacher.department }}</p>
    </div>
  `
})
export class TeacherViewComponent {
    teacher?: Teacher;

    constructor(private route: ActivatedRoute, private service: TeacherService) {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.service.getById(id).subscribe(data => this.teacher = data);
    }
}
