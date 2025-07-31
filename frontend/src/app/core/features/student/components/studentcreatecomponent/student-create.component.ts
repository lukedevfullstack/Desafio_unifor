import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-student-create',
    standalone: true,
    templateUrl: './student-create.component.html',
    styleUrls: ['./student-create.component.css'],
    imports: [ReactiveFormsModule, CommonModule],
})
export class StudentCreateComponent {
    studentForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        registration: ['', Validators.required]
    });

    constructor(
        private fb: FormBuilder,
        private studentService: StudentService,
        private router: Router
    ) { }

    onSubmit(): void {
        if (this.studentForm.valid) {
            this.studentService.create(this.studentForm.value).subscribe({
                next: () => this.router.navigate(['/students']),
                error: (err) => console.error('Error creating student:', err)
            });
        }
    }
}
