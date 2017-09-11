import { Component, OnInit } from '@angular/core';

import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'crumb-location',
  templateUrl: 'crumb-location.html'
})
export class CrumbLocationComponent implements OnInit{

  flag: string;
  citys: string;
  country: string;
  departament: string;

  constructor(private storageProvider: StorageProvider) {
    console.log('crumb-location');
  }

  ngOnInit() { 
    console.log('crumb-location onViewDidEnter');
    this.storageProvider.get('city').then(data => this.citys = data);
    this.storageProvider.get('flag').then(data => this.flag = data);
    this.storageProvider.get('country').then(data => this.country = data);
    this.storageProvider.get('departament').then(data => this.departament = data);
  }

}
