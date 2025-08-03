import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseCreateComponent } from './course-create.component';
import { CourseEditComponent } from './course-edit.component';

@NgModule({
    declarations: [CourseListComponent, CourseCreateComponent, CourseEditComponent],
    imports: [CommonModule, FormsModule, RouterModule],
})
export class CourseModule { }
