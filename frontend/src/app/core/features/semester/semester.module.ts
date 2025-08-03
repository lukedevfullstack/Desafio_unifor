import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SemesterListComponent } from './pages/semester-list.component';
import { SemesterCreateComponent } from './pages/semester-create.component';
import { SemesterEditComponent } from './pages/semester-edit.component';
import { SemesterViewComponent } from './pages/semester-view.component';
import { SemesterRoutingModule } from './semester-routing.module';

@NgModule({
    declarations: [
        SemesterListComponent,
        SemesterCreateComponent,
        SemesterEditComponent,
        SemesterViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SemesterRoutingModule
    ]
})
export class SemesterModule { }
