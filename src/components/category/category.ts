import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategorysProvider } from '../../providers/categorys/categorys';

/**
 * Muestra un tipo de categoria en la pagina categorys
 * muestra sus subcategorias si se hace tap sobre él
 */
@Component({
  selector: 'category',
  templateUrl: 'category.html'
})
export class CategoryComponent implements OnInit {

  @Input() sub: any;
  @Input() img: string;
  @Input() name: string;
  showSub: boolean = false;
  @Input() hasLevel: boolean;
  @Output() onSelected:  EventEmitter<any> = new EventEmitter();

  constructor(public navCtrl: NavController,
              private categorysProvider: CategorysProvider) {}

  ngOnInit() {}

  select(){
    this.showSub = !this.showSub;
  }

  clickSub(subName: string){
    this.onSelected.emit({category: this.name, sub: subName})
  }

}
