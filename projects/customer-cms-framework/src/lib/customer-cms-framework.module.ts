import { NgModule } from '@angular/core';
import { CustomerCmsSidebarModule } from 'customer-cms-sidebar';
import { CustomerCmsFrameworkComponent } from './customer-cms-framework.component';

@NgModule({
  declarations: [CustomerCmsFrameworkComponent],
  imports: [CustomerCmsSidebarModule],
  exports: [CustomerCmsFrameworkComponent]
})
export class CustomerCmsFrameworkModule {}
