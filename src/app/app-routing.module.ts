import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'counter', component: CounterComponent },
  
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { };