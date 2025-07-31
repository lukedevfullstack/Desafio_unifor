import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-student-edit',
    standalone: true,
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.css'],
    imports: [ReactiveFormsModule, CommonModule],
})
export class StudentEditComponent implements OnInit {
    studentId!: number;

    studentForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        registration: ['', Validators.required]
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private studentService: StudentService
    ) { }

    ngOnInit(): void {
        this.studentId = Number(this.route.snapshot.paramMap.get('id'));
        this.studentService.getById(this.studentId).subscribe(student => {
            if (student) {
                this.studentForm.patchValue(student);
            }
        });
    }

    onSubmit(): void {
        if (this.studentForm.valid) {
            this.studentService.update(this.studentId, this.studentForm.value).subscribe({
                next: () => this.router.navigate(['/students']),
                error: err => console.error('Update error', err)
            });
        }
    }
}
