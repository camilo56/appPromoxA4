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
  goSubcribe(){
    this.navCtrl.push('SubscribePage');
  }
}
