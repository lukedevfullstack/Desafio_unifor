import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['admin'] }
    },
    {
        path: 'student',
        loadChildren: () => import('./features/student/student.module').then(m => m.StudentModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['aluno'] }
    },
    {
        path: 'professor',
        loadChildren: () => import('./features/professor/professor.module').then(m => m.ProfessorModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['professor'] }
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    },
    { path: '**', redirectTo: '/forbidden' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }