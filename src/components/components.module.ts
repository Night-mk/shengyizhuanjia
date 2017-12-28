import { NgModule } from '@angular/core';
import { CopyRightComponent } from './copy-right/copy-right';
import { CategoryListComponent } from './category-list/category-list';
@NgModule({
	declarations: [CopyRightComponent,
    CategoryListComponent],
	imports: [],
	exports: [CopyRightComponent,
    CategoryListComponent]
})
export class ComponentsModule {}
