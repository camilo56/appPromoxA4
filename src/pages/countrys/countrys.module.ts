import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountrysPage } from './countrys';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    CountrysPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CountrysPage),
  ],
})
export class CountrysPageModule {}
