import { Routes } from '@angular/router';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherCreateComponent } from './components/teacher-create/teacher-create.component';
import { TeacherEditComponent } from './components/teacher-edit/teacher-edit.component';
import { TeacherViewComponent } from './components/teacher-view/teacher-view.component';

export const teacherRoutes: Routes = [
    { path: '', component: TeacherListComponent },
    { path: 'create', component: TeacherCreateComponent },
    { path: 'edit/:id', component: TeacherEditComponent },
    { path: 'view/:id', component: TeacherViewComponent },
];
