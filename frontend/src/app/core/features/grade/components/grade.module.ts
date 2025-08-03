import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GradeRoutingModule } from './grade-routing.module';
import { GradeListComponent } from './components/grade-list.component';
import { GradeCreateComponent } from './components/grade-create.component';
import { GradeEditComponent } from './components/grade-edit.component';
import { GradeViewComponent } from './components/grade-view.component';

@NgModule({
    declarations: [
        GradeListComponent,
        GradeCreateComponent,
        GradeEditComponent,
        GradeViewComponent,
    ],
    imports: [CommonModule, FormsModule, GradeRoutingModule],
})
export class GradeModule { }
