import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: '<span>{{prop1.tolower}}</spa>',
})
export class InlineComponent {
  prop1 = 'hello';
  prop2 = 'world';
}

@Component({
  selector: 'app',
  templateUrl: './app.component.ngml',
})
export class AppComponent {
  prop1 = 'hello';
  prop2 = 'world';
}

