import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { ToolsProvider } from './../../providers/tools/tools';
import { LoadingProvider } from '../../providers/loading/loading';
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
  countryFlag: string;
  departamentsArray: object[];
  departamentSelected: string;
  citysArray: object[];
  citySelect: string;
  canNext: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tools: ToolsProvider,
              public loadingProvider: LoadingProvider,
              public storageProvider: StorageProvider,
              public locationProvider: LocationProvider,
              private firebase: AngularFireDatabase) {
  }


  /**
   * consulta que no se tenga registrado un pais en el storage del
   * dispositivo, para que el usuario pueda seleccionar su ubicacion
   */
  ionViewDidLoad() {
    this.clear();
    this.locationProvider.countrys
      .subscribe(data => this.countrysArray = data);
    this.locationProvider.departament$
      .subscribe(this.loadDepartaments);
    this.locationProvider.city$
      .subscribe(this.loadCitys);

    //this.storageProvider.get('country').then(this.processCountry, this.handleError);
  }

  processCountry = (data) => {
    if(data !== null && data !== ''){
      this.goToCategorys();
    }
  }

  handleError = (data) => {
    console.log('error consultado la db');
  }

  selected(country:{name: string, url: string}, countrysArray: object[]){
    this.canNext = false;
    this.countryFlag = country.url;
    this.countrysArray = this.locationProvider.selectedCountry(country.name, countrysArray);
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
      this.clear();
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
    this.loadingProvider.show();
    const prom = new Promise((resolve, reject) => {
      Promise.all([
        provider.set('city', this.citySelect),
        provider.set('flag', this.countryFlag),
        provider.set('country', this.countrySelected),
        provider.set('departament', this.departamentSelected),
      ]).then(values => resolve(true));
    })

    return prom;
  }

  clear(){
    this.canNext = false;
    this.citysArray = [];
    this.citySelect = '';
    this.departamentsArray = []
    this.departamentSelected = '';
  }
}
