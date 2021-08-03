import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import { WikiService } from './wiki.service';
import { AppCommonModule } from '../commons/app.common.module';
import { NgbModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
  ],
  declarations: [
    WikiComponent
  ],
  providers: [WikiService],
  exports: [WikiComponent]
})
export class WikiModule { }
