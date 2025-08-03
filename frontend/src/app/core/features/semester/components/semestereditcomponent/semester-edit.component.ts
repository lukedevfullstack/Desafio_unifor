import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SemesterService } from '../../services/semester.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-semester-edit',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './semester-edit.component.html',
    styleUrls: ['./semester-edit.component.css']
})
export class SemesterEditComponent implements OnInit {
    form = this.fb.group({
        name: [''],
        startDate: [''],
        endDate: ['']
    });

    id!: number;

    constructor(
        private fb: FormBuilder,
        private semesterService: SemesterService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.params['id'];
        this.semesterService.getById(this.id).subscribe(data => this.form.patchValue(data));
    }

    submit() {
        this.semesterService.update(this.id, this.form.value).subscribe(() => this.router.navigate(['/semesters']));
    }
}
