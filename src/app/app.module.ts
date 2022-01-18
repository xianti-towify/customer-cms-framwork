import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerCmsFrameworkModule } from '../../projects/customer-cms-framework/src';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CustomerCmsFrameworkModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
