import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsComponent } from './keywords/keywords.component';
import { TextComponent } from './text/text.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextComponent,
    KeywordsComponent
  ],
  exports: [
    TextComponent,
    KeywordsComponent
  ]
})
export class AppCommonModule { }
