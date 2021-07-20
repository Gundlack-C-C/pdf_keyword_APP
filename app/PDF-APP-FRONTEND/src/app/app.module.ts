import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './commons/app.common.module';
import { WikiModule } from './wiki/wiki.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextInputComponent } from './views/text-input/text-input.component';
import { PdfModule } from './pdf/pdf.module';

@NgModule({
  declarations: [	
    AppComponent,
    TextInputComponent
  ],
  imports: [
    AppCommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    WikiModule,
    PdfModule,
    NgbModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
