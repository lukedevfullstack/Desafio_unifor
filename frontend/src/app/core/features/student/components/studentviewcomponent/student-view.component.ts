import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
    selector: 'app-student-view',
    standalone: true,
    templateUrl: './student-view.component.html',
    styleUrls: ['./student-view.component.css'],
    imports: [CommonModule]
})
export class StudentViewComponent implements OnInit {
    studentId!: number;
    student!: Student;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private studentService: StudentService
    ) { }

    ngOnInit(): void {
        this.studentId = Number(this.route.snapshot.paramMap.get('id'));
        this.studentService.getById(this.studentId).subscribe(student => {
            if (student) {
                this.student = student;
            }
        });
    }

    goBack(): void {
        this.router.navigate(['/students']);
    }
}
