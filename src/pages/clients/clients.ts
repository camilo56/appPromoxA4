import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../providers/storage/storage';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storageProvider: StorageProvider,
              public loadingProvider: LoadingProvider,) {
  }

  ionViewDidLoad() {
    this.loadingProvider.close();
    this.storageProvider.get('sub').then(info => console.log(info));
    this.storageProvider.get('category').then(info => console.log(info));
  }

}
