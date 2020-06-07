import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Первое приложение на Angular';
  name:string = '';
  age = 30;
  counter: number = 0;
  increase(): void {
    this.counter++;
  };
  decrease(): void {
    this.counter--;
  };
  name:string = 'Tom';
}
