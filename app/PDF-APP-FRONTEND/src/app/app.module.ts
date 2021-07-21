import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './commons/app.common.module';
import { WikiModule } from './wiki/wiki.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfModule } from './pdf/pdf.module';
import { TextInputViewComponent } from './views/text-input-view/text-input-view.component';
import { TextInputSelectComponent } from './views/text-input-select/text-input-select.component';
import { TextAnalyseViewComponent } from './views/text-analyse-view/text-analyse-view.component';
import { AlgoInputSelectComponent } from './views/algo-input-select/algo-input-select.component';

@NgModule({
  declarations: [	
    AppComponent,
    TextInputSelectComponent,
    TextInputViewComponent,
    TextAnalyseViewComponent,
    AlgoInputSelectComponent
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
