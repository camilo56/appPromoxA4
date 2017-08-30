import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountrysPage } from './countrys';

@NgModule({
  declarations: [
    CountrysPage,
  ],
  imports: [
    IonicPageModule.forChild(CountrysPage),
  ],
})
export class CountrysPageModule {}
