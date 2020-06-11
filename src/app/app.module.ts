import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component'
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/store/counter.reducer';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './components/auth/auth.component';
import { UIModule } from './ui.module';
@NgModule({

  declarations: [
    AppComponent,
    AuthComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({ count : counterReducer }),
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatSelectModule,
    // MatCheckboxModule,
    // MatChipsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
