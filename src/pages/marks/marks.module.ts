import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarksPage } from './marks';

@NgModule({
  declarations: [
    MarksPage,
  ],
  imports: [
    IonicPageModule.forChild(MarksPage),
  ],
})
export class MarksPageModule {}
