import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CounterSimpleComponent } from './counter-simple/counter.component';
import { CounterStoreComponent } from './counter-store/counter.component';

@NgModule({
    declarations: [CounterStoreComponent, CounterSimpleComponent],

    imports: [
        CommonModule,

    ]
})

export class CounterModule {}