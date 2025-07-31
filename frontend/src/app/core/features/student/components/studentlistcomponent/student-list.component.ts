import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-student-list',
    standalone: true,
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    students: Student[] = [];

    constructor(
        private studentService: StudentService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadStudents();
    }

    loadStudents(): void {
        this.studentService.getAll().subscribe({
            next: (data) => (this.students = data),
            error: (err) => console.error('Error loading students:', err)
        });
    }

    viewStudent(id: number): void {
        this.router.navigate(['/students/view', id]);
    }

    editStudent(id: number): void {
        this.router.navigate(['/students/edit', id]);
    }

    deleteStudent(id: number): void {
        if (confirm('Are you sure you want to delete this student?')) {
            this.studentService.delete(id).subscribe({
                next: () => this.loadStudents(),
                error: (err) => console.error('Error deleting student:', err)
            });
        }
    }
}
