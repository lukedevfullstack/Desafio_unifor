import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './course.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-course-form',
    standalone: true,
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css'],
    imports: [CommonModule, ReactiveFormsModule],
})
export class CourseFormComponent implements OnInit {
    form = this.fb.group({
        id: [0],
        name: [''],
        description: [''],
    });

    constructor(
        private fb: FormBuilder,
        private courseService: CourseService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (id) {
            this.courseService.getById(id).subscribe((course) => {
                this.form.patchValue(course);
            });
        }
    }

    onSubmit() {
        const course = this.form.value as Course;
        if (course.id) {
            this.courseService.update(course.id, course).subscribe(() => {
                this.router.navigate(['/courses']);
            });
        } else {
            this.courseService.create(course).subscribe(() => {
                this.router.navigate(['/courses']);
            });
        }
    }
}
