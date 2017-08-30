import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FirebaseProvider } from './../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-countrys',
  templateUrl: 'countrys.html',
})

export class CountrysPage {
  countrys: any;
  countrysArray: {name: string}[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private firebase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.firebase.object('/countrys', { preserveSnapshot: true })
        .subscribe(snapshot => {
          this.countrys = snapshot.val();
          this.countrysArray = this.formatArray(this.countrys);
        });
  }

  selected(country){
    console.log('country: ',country);
  }

  formatArray(data = {}){
    return Object.keys(data)
                  .reduce((before, current) =>{
                    return before.concat({name: current});
                  }, []);

  }

  goToCategorys(){
    this.navCtrl.push('CategorysPage');
  }

}
