import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterSimpleComponent implements OnInit {
  
  counter:number = 0;

  increase() : void {
    this.counter++
  };

  decrease() : void {
    this.counter--
  };

  zero() : void {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

}
