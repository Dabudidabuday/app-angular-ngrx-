import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ChildComponent } from './child.components';

import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'counter', component: CounterComponent },

]
@NgModule({

  declarations: [
    AppComponent,
    CounterComponent,
    ChildComponent,

  ],

  imports: [
    BrowserModule,
    StoreModule.forRoot({ count : counterReducer }),
    RouterModule.forRoot(appRoutes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
