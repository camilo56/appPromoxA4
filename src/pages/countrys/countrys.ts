import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FirebaseProvider } from './../../providers/firebase/firebase';
/**
 * Generated class for the CountrysPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-countrys',
  templateUrl: 'countrys.html',
})
export class CountrysPage {
  countrys: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private firebase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountrysPage');
    this.firebase.object('/countrys').subscribe(snapshots => {
        console.log(snapshots)
    })
    //this.firebase.getDataBase.ref()
  }

}
