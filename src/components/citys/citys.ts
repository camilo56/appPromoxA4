import { Component } from '@angular/core';

/**
 * Generated class for the CitysComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'citys',
  templateUrl: 'citys.html'
})
export class CitysComponent {

  text: string;

  constructor() {
    console.log('Hello CitysComponent Component');
    this.text = 'Hello World';
  }

}
