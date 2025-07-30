import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course.model';

@Component({
    selector: 'app-course-list',
    standalone: true,
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    imports: [],
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.loadCourses();
    }

    loadCourses() {
        this.courseService.getAll().subscribe((data) => {
            this.courses = data;
        });
    }

    deleteCourse(id: number) {
        if (confirm('Are you sure you want to delete this course?')) {
            this.courseService.delete(id).subscribe(() => this.loadCourses());
        }
    }
}
