import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: '<span>{{prop1.toLowerCase()}}</span>',
})
export class InlineComponent {
  prop1 = 'hello';
  prop2 = 'world';
}

@Component({
  selector: 'app',
  template: './app.component.html'
})
export class AppComponent {
  prop1 = 'hello';
  prop2 = 'world';
}

