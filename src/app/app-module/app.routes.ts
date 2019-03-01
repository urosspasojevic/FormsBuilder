import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        loadChildren: 'app/login-module/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: 'app/main-module/main.module#MainModule'
    }
];
