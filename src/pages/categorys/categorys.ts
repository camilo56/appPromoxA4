import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-categorys',
  templateUrl: 'categorys.html',
})
export class CategorysPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storageProvider: StorageProvider) {
  }

  ionViewDidLoad() {
    this.storageProvider.get('country').then((data)=> alert(data))
    this.storageProvider.get('departament').then((data)=> alert(data))
    this.storageProvider.get('city').then((data)=> alert(data))
  }

}
