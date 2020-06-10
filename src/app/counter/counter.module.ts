import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CounterSimpleComponent } from './counter-simple/counter.component';
import { CounterStoreComponent } from './counter-store/counter.component';
import { RouterModule } from '@angular/router';
import { counterRoutes } from './counter-routing.module';

@NgModule({
    declarations: [CounterStoreComponent, CounterSimpleComponent],

    imports: [
        CommonModule,
        RouterModule.forRoot(counterRoutes),
    ]
})

export class CounterModule {}