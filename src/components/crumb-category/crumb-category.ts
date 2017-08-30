import { Component } from '@angular/core';

/**
 * Generated class for the CrumbCategoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'crumb-category',
  templateUrl: 'crumb-category.html'
})
export class CrumbCategoryComponent {

  text: string;

  constructor() {
    console.log('Hello CrumbCategoryComponent Component');
    this.text = 'Hello World';
  }

}
