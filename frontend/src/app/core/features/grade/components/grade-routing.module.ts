import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeListComponent } from './components/grade-list.component';
import { GradeCreateComponent } from './components/grade-create.component';
import { GradeEditComponent } from './components/grade-edit.component';
import { GradeViewComponent } from './components/grade-view.component';

const routes: Routes = [
    { path: '', component: GradeListComponent },
    { path: 'create', component: GradeCreateComponent },
    { path: 'edit/:id', component: GradeEditComponent },
    { path: 'view/:id', component: GradeViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GradeRoutingModule { }
