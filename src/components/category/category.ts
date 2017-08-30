import { Component } from '@angular/core';

/**
 * Muestra un tipo de categoria en la pagina categorys
 * muestra sus sub categorias si se hace tap sobre él
 */
@Component({
  selector: 'category',
  templateUrl: 'category.html'
})
export class CategoryComponent {

  text: string;

  constructor() {
    console.log('Hello CategoryComponent Component');
    this.text = 'Hello World';
  }

}
