import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TEACHER_ROUTES } from './teacher.routes';

@NgModule({
    imports: [RouterModule.forChild(TEACHER_ROUTES)]
})
export class TeacherModule { }
