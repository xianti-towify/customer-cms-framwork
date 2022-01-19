import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CustomerCmsSidebarModule } from 'customer-cms-sidebar';
import { RouterModule } from '@angular/router';
import { CustomerCmsFrameworkComponent } from './customer-cms-framework.component';
import { CustomerCmsFrameworkService } from './customer-cms-framework.service';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
    );
  }
}

@NgModule({
  declarations: [CustomerCmsFrameworkComponent],
  imports: [CustomerCmsSidebarModule, RouterModule],
  exports: [CustomerCmsFrameworkComponent]
})
export class CustomerCmsFrameworkModule {
  constructor(@Optional() @SkipSelf() parentModule: CustomerCmsFrameworkModule) {
    throwIfAlreadyLoaded(parentModule, 'CustomerCmsFrameworkModule');
  }

  static forRoot(): ModuleWithProviders<CustomerCmsFrameworkModule> {
    return {
      ngModule: CustomerCmsFrameworkModule,
      providers: [CustomerCmsFrameworkService]
    };
  }
}
