import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SemesterService } from '../../services/semester.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-semester-create',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './semester-create.component.html',
    styleUrls: ['./semester-create.component.css']
})
export class SemesterCreateComponent {
    form = this.fb.group({
        name: [''],
        startDate: [''],
        endDate: ['']
    });

    constructor(private fb: FormBuilder, private semesterService: SemesterService, private router: Router) { }

    submit() {
        this.semesterService.create(this.form.value).subscribe(() => this.router.navigate(['/semesters']));
    }
}
