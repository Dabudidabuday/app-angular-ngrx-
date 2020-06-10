import { Routes } from '@angular/router';
import { CounterSimpleComponent } from './counter-simple/counter.component';
import { CounterStoreComponent } from './counter-store/counter.component';

export const counterRoutes: Routes = [
    { path: 'counter-simple', loadChildren: () =>},
    { path: 'counter-store', component: CounterStoreComponent }
]

export class CounterRoutingModule {};