import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './commons/app.common.module';
import { WikiModule } from './wiki/wiki.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    AppCommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    WikiModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
