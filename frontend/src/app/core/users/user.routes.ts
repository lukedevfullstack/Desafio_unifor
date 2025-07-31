import { Routes } from '@angular/router';
import { UserCrudPage } from './pages/user-crud.page';

export const userRoutes: Routes = [
    {
        path: '',
        component: UserCrudPage,
    }
];
