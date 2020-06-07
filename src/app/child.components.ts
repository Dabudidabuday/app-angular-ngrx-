import { Component } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2>Добро пожаловать, {{name}}!`,
    styles: [`h2 {color: red;}`]
})

export class ChildComponent {
    name="Евгений";
}