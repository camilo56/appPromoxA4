import { Component } from '@angular/core';

/**
 * Generated class for the CrumbLocationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'crumb-location',
  templateUrl: 'crumb-location.html'
})
export class CrumbLocationComponent {

  text: string;

  constructor() {
    console.log('Hello CrumbLocationComponent Component');
    this.text = 'Hello World';
  }

}
