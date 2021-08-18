import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../commons/app.common.module';
import { NgbModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from './session.service';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
  ],

  providers: [SessionService],
})
export class SessionModule { }
