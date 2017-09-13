import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../providers/storage/storage';
import { LoadingProvider } from '../../providers/loading/loading';
import { CategorysProvider } from '../../providers/categorys/categorys';

@IonicPage()
@Component({
  selector: 'page-categorys',
  templateUrl: 'categorys.html',
})
export class CategorysPage {

  categorys: any[];
  hideSubscribe = false;
  subSelected: string
  categorySelected: string

  constructor(public navParams: NavParams,
              public navCtrl: NavController, 
              public loadingProvider: LoadingProvider,
              public storageProvider: StorageProvider,
              private categorysProvider: CategorysProvider) {
  }

  ionViewDidLoad() {
    this.loadingProvider.close();
    this.categorysProvider.get()
        .subscribe(data => this.categorys = data);
  }
  
  close() {
    this.hideSubscribe = true;
  }

  select(info: {category: string, sub: string}){
    console.log(info);
    this.subSelected = info.sub
    this.categorySelected = info.category
    this.navCtrl.push('ClientsPage');
  }

  goSubcribe(){
    this.navCtrl.push('SubscribePage');
  }

  ionViewCanLeave() {
    this.loadingProvider.show();
    const prom = new Promise((resolve, reject) => {
      Promise.all([
        this.storageProvider.set('sub', this.subSelected),
        this.storageProvider.set('category', this.categorySelected)
      ]).then(values => resolve(true));
    })
    return prom;
  }

}
