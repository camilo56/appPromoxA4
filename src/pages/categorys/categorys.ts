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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingProvider: LoadingProvider,
              private categorysProvider: CategorysProvider,
              public storageProvider: StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('category onViewDidEnter');
    this.loadingProvider.close();
    this.categorysProvider.get()
        .subscribe(data => this.categorys = data);
  }

}
