import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { ConversionComponent }    from './conversion/conversion.component'
import {FeedbackComponent}        from './feedback/feedback.component'


const appRoutes: Routes = [

  { path: 'temp', component: ConversionComponent },
  { path: 'Feedback', component: FeedbackComponent },
  { path: '', redirectTo: 'temp', pathMatch: 'full' }, // when their is nothing specififed what is pathMatch
  { path: '**', component: ConversionComponent } // when their is a wrong page typed in take them to here
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// Set a page like page-a then set what component you want to send with it
