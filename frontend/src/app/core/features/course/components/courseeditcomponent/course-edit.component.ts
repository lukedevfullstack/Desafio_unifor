import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './course.model';

@Component({
    selector: 'app-course-edit',
    templateUrl: './course-form.component.html',
})
export class CourseEditComponent implements OnInit {
    course: Course = { name: '', code: '', description: '' };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private courseService: CourseService
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.courseService.getById(id).subscribe(data => (this.course = data));
    }

    onSubmit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.courseService.update(id, this.course).subscribe(() => {
            this.router.navigate(['/courses']);
        });
    }
}
