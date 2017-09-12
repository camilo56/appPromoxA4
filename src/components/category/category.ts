import { Component, Input, OnInit } from '@angular/core';
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

  constructor(public navCtrl: NavController,
              private categorysProvider: CategorysProvider) {}

  ngOnInit() {}

  select(){
    if(this.hasLevel){
      this.showSub = !this.showSub;
    }else{
      console.log('cambio de pagina');
      console.log(this.sub);
      //this.navCtrl.push('CategorysPage');
    }
  }

  clickSub(){
    console.log('clickSub');
  }

}
