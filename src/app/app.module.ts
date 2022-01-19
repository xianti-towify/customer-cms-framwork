import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerCmsFrameworkModule } from '../../projects/customer-cms-framework/src';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AppComponent, ContentComponent],
  imports: [BrowserModule, AppRoutingModule, CustomerCmsFrameworkModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
