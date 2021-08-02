import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsComponent } from './keywords/keywords.component';
import { TextComponent } from './text/text.component';
import { TextInputComponent } from './text/text-input/text-input.component';
import { TextAnalyticsComponent } from './text-analytics/text-analytics.component';
import { KeywordsBarComponent } from './keywords-bar/keywords-bar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextComponent,
    KeywordsComponent,
    TextInputComponent,
    TextAnalyticsComponent,
    KeywordsBarComponent
  ],
  exports: [
    TextComponent,
    TextInputComponent,
    KeywordsComponent,
    TextAnalyticsComponent
  ]
})
export class AppCommonModule { }
