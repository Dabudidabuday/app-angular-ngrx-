import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component'
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/store/counter.reducer';
import { AppRoutingModule } from './app-routing.module';


@NgModule({

  declarations: [
    AppComponent,
    CounterComponent,

  ],

  imports: [
    BrowserModule,
    StoreModule.forRoot({ count : counterReducer }),
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
