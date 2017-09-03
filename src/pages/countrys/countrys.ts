import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { ToolsProvider } from './../../providers/tools/tools';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { LocationProvider } from '../../providers/location/location';

@IonicPage()
@Component({
  selector: 'page-countrys',
  templateUrl: 'countrys.html',
})

export class CountrysPage {
  countrysArray: object[];
  countrySelected: string;
  departamentsArray: object[];
  departamentSelected: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tools: ToolsProvider,
              public locationProvider: LocationProvider,
              private firebase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.locationProvider.countrys
      .subscribe(data => this.countrysArray = data);
    this.locationProvider.departament$
      .subscribe(this.loadDepartaments);
  }

  selected(country:string, countrysArray: object[]){
    this.countrysArray = this.locationProvider.selected(country, countrysArray);
  }

  loadDepartaments = (data) => {
    console.log(data);
    this.countrySelected = data.name;
    console.log(this.countrysArray);
    this.countrysArray = this.countrysArray.map( (info:any) =>{
      console.log(info);
      if(info.name === this.countrySelected){
        info.departaments = data.departaments;
      }
      return info;
    })
    this.departamentsArray = data.departaments;
  }

  goToCategorys(){
    this.navCtrl.push('CategorysPage');
  }

}
