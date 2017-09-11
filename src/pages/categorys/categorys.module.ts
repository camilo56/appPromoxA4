import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorysPage } from './categorys';

import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    CategorysPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CategorysPage),
  ],
})
export class CategorysPageModule {}
