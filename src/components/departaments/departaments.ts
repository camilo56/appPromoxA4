import { Component, Input, Output,} from '@angular/core';
import { LocationProvider } from '../../providers/location/location';

@Component({
  selector: 'departaments',
  templateUrl: 'departaments.html'
})
export class DepartamentsComponent {

  @Input() countrySelected: string;
  @Input() departaments: any[] = [];

  constructor(public locationProvider: LocationProvider) {}

  change(departament: any){
    this.locationProvider.getCitys(`location/citys/${this.countrySelected}/${departament.value}`, departament.value);
  }
}
