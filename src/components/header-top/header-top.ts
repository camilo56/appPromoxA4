import { Component } from '@angular/core';

/**
 * Generated class for the HeaderTopComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header-top',
  templateUrl: 'header-top.html'
})
export class HeaderTopComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderTopComponent Component');
    this.text = 'Desde comopnent top';
  }

}
