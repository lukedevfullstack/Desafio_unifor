export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'admin',
                loadChildren: () => import('./admin/admin.routes'),
                canActivate: [RoleGuard],
                data: { roles: ['admin'] }
            },
            {
                path: 'coordinator',
                loadChildren: () => import('./coordinator/coordinator.routes'),
                canActivate: [RoleGuard],
                data: { roles: ['coordinator'] }
            },
            {
                path: 'teacher',
                loadChildren: () => import('./teacher/teacher.routes'),
                canActivate: [RoleGuard],
                data: { roles: ['teacher'] }
            },
            {
                path: 'student',
                loadChildren: () => import('./student/student.routes'),
                canActivate: [RoleGuard],
                data: { roles: ['student'] }
            }
        ]
    }
];
