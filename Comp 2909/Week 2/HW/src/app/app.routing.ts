import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { food }                  from './app.FoodItem';
import { details }                  from './app.detail';
import { about }                 from './app.home';

const appRoutes: Routes = [

    { path: 'page-a', component: food },
    { path: 'page-b/:id', component: details },
    { path: 'about', component: about},
    { path: '', redirectTo: 'page-a', pathMatch: 'full' }, // when their is nothing specififed what is pathMatch
    { path: '**', component: food }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// Set a page like page-a then set what component you want to send with it
/**
 *
 */