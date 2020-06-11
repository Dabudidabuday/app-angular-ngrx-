import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'counter-simple',
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
