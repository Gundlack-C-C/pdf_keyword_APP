import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsComponent } from './keywords/keywords.component';
import { TextComponent } from './text/text.component';
import { TextInputComponent } from './text/text-input/text-input.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextComponent,
    KeywordsComponent,
    TextInputComponent
  ],
  exports: [
    TextComponent,
    TextInputComponent,
    KeywordsComponent,
  ]
})
export class AppCommonModule { }
