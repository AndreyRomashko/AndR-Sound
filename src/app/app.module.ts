import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteHeaderModule } from './site-header/site-header.module';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    SiteHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
