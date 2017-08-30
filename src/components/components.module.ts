import { NgModule } from '@angular/core';
import { CrumbLocationComponent } from './crumb-location/crumb-location';
import { CategoryComponent } from './category/category';
import { CrumbCategoryComponent } from './crumb-category/crumb-category';
import { HeaderTopComponent } from './header-top/header-top';
@NgModule({
	declarations: [
    CrumbLocationComponent,
    CategoryComponent,
    CrumbCategoryComponent,
    HeaderTopComponent],
	imports: [],
	exports: [
    CrumbLocationComponent,
    CategoryComponent,
    CrumbCategoryComponent,
    HeaderTopComponent]
})
export class ComponentsModule {}
