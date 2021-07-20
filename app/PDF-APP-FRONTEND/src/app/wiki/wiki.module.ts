import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import { WikiService } from './wiki.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WikiComponent
  ],
  providers: [WikiService],
  exports: [WikiComponent]
})
export class WikiModule { }
