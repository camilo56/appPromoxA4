import { Component, Input } from '@angular/core';

import { CategorysProvider } from '../../providers/categorys/categorys';

/**
 * Muestra un tipo de categoria en la pagina categorys
 * muestra sus sub categorias si se hace tap sobre él
 */
@Component({
  selector: 'category',
  templateUrl: 'category.html'
})
export class CategoryComponent {

  @Input() img: string;
  @Input() name: string;

  constructor(private categorysProvider: CategorysProvider) {
  }

}
