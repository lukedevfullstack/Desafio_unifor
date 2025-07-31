import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { studentRoutes } from './student.routes';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentViewComponent } from './components/student-view/student-view.component';

@NgModule({
    declarations: [
        StudentListComponent,
        StudentCreateComponent,
        StudentEditComponent,
        StudentViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(studentRoutes)
    ]
})
export class StudentModule { }
