import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseCreateComponent } from './course-create.component';
import { CourseEditComponent } from './course-edit.component';

export const courseRoutes: Routes = [
    { path: 'courses', component: CourseListComponent },
    { path: 'courses/create', component: CourseCreateComponent },
    { path: 'courses/edit/:id', component: CourseEditComponent },
];
