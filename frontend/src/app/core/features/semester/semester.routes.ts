import { Routes } from '@angular/router';
import { SemesterListComponent } from './pages/semester-list.component';
import { SemesterCreateComponent } from './pages/semester-create.component';
import { SemesterEditComponent } from './pages/semester-edit.component';
import { SemesterViewComponent } from './pages/semester-view.component';

export const semesterRoutes: Routes = [
    {
        path: '',
        component: SemesterListComponent,
    },
    {
        path: 'create',
        component: SemesterCreateComponent,
    },
    {
        path: 'edit/:id',
        component: SemesterEditComponent,
    },
    {
        path: 'view/:id',
        component: SemesterViewComponent,
    },
];
