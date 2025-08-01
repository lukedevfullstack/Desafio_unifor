import { Routes } from '@angular/router';
import { ListSubjectComponent } from './list-subject.component';
import { ViewSubjectComponent } from './view-subject.component';
import { CreateSubjectComponent } from './create-subject.component';
import { EditSubjectComponent } from './edit-subject.component';

export const SUBJECT_ROUTES: Routes = [
    { path: '', component: ListSubjectComponent },
    { path: 'new', component: CreateSubjectComponent },
    { path: ':id', component: ViewSubjectComponent },
    { path: ':id/edit', component: EditSubjectComponent }
];
