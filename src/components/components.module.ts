import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrumbLocationComponent } from './crumb-location/crumb-location';
import { CategoryComponent } from './category/category';
import { CrumbCategoryComponent } from './crumb-category/crumb-category';
import { HeaderTopComponent } from './header-top/header-top';
import { DepartamentsComponent } from './departaments/departaments';
import { CitysComponent } from './citys/citys';
@NgModule({
	declarations: [
    CrumbLocationComponent,
    CategoryComponent,
    CrumbCategoryComponent,
    HeaderTopComponent,
    DepartamentsComponent,
    CitysComponent],
	imports: [CommonModule],
	exports: [
    CrumbLocationComponent,
    CategoryComponent,
    CrumbCategoryComponent,
    HeaderTopComponent,
    DepartamentsComponent,
    CitysComponent]
})
export class ComponentsModule {}
