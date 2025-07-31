import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { courseRoutes } from './features/course/course.routes';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'courses',
        children: courseRoutes,
    },
];