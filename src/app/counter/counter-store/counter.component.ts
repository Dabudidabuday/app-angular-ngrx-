import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { increment, decrement, reset } from '../store/counter.actions';

@Component({
  selector: 'counter-store',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterStoreComponent implements OnInit {
  count$ = new Observable<number>();


  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
  }

}
