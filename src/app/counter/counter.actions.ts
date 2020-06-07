import { createAction } from '@ngrx/store';

export const decrement = createAction('[Counter component] Decrement');
export const increment = createAction('[Counter component] Increment');
export const reset = createAction('[Counter component] Reset');