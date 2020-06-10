import { Routes, RouterModule } from '@angular/router';
import { CounterSimpleComponent } from './counter-simple/counter.component';
import { CounterStoreComponent } from './counter-store/counter.component';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';

export const routes: Routes = [
    { path: '', component: CounterComponent },
    { path: 'simple', component: CounterSimpleComponent},
    { path: 'store', component: CounterStoreComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CounterRoutingModule {};