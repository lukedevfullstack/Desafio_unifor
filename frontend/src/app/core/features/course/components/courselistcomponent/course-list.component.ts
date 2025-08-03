import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course.model';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.loadCourses();
    }

    loadCourses(): void {
        this.courseService.getAll().subscribe(data => this.courses = data);
    }
}
