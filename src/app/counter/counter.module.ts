import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CounterSimpleComponent } from './counter-simple/counter.component';
import { CounterStoreComponent } from './counter-store/counter.component';
import { RouterModule } from '@angular/router';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';

@NgModule({
    declarations: [CounterComponent, CounterStoreComponent, CounterSimpleComponent ],

    imports: [
        CommonModule,
        CounterRoutingModule
    ]
})

export class CounterModule {}