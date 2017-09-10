import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { ToolsProvider } from './../../providers/tools/tools';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { LocationProvider } from '../../providers/location/location';
import { StorageProvider } from '../../providers/storage/storage';

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
  citysArray: object[];
  citySelect: string;
  canNext: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tools: ToolsProvider,
              public storageProvider: StorageProvider,
              public locationProvider: LocationProvider,
              private firebase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.locationProvider.countrys
      .subscribe(data => this.countrysArray = data);
    this.locationProvider.departament$
      .subscribe(this.loadDepartaments);
    this.locationProvider.city$
      .subscribe(this.loadCitys);
  }

  selected(country:string, countrysArray: object[]){
    this.canNext = false;
    this.countrysArray = this.locationProvider.selectedCountry(country, countrysArray);
  }

  loadDepartaments = (data) => {
    this.countrySelected = data.name;
    this.countrysArray = this.countrysArray.map( (info:any) =>{
      if(info.name === this.countrySelected){
        info.departaments = data.departaments;
      }
      return info;
    })
    this.departamentsArray = data.departaments;
  }

  loadCitys = (data) => {
    this.canNext = false;
    this.departamentSelected = data.name;
    if(this.departamentSelected === ''){
      this.citysArray = [];
    }else{
      this.citysArray = data.citys;
    }
  }

  citySelected(city: string){
    this.canNext = true;
    this.citySelect = city;
  }

  goToCategorys(){
    this.navCtrl.push('CategorysPage');
  }

  ionViewCanLeave() {
    let provider = this.storageProvider;
    console.log('ionViewCanLeave');
    console.log('countrySelected', this.countrySelected);
    console.log('departamentSelected', this.departamentSelected);
    console.log('citySelect', this.citySelect);
    provider.set('country', this.countrySelected).then(data=>alert(data));
    provider.set('departament', this.departamentSelected);
    provider.set('city', this.citySelect);
    return true;
  }

}
