import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentViewComponent } from './components/student-view/student-view.component';

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    component: StudentListComponent,
  },
  {
    path: 'create',
    component: StudentCreateComponent,
  },
  {
    path: 'edit/:id',
    component: StudentEditComponent,
  },
  {
    path: 'view/:id',
    component: StudentViewComponent,
  }
];
