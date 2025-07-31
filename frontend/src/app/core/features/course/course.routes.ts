import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseFormComponent } from './course-form.component';

export const courseRoutes: Routes = [
    { path: '', component: CourseListComponent },
    { path: 'new', component: CourseFormComponent },
    { path: 'edit/:id', component: CourseFormComponent },
];
