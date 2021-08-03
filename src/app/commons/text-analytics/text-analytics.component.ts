import { Component, Input } from '@angular/core';
import { KeywordAnalytics, TextAnalytics } from '../models';

@Component({
  selector: 'app-text-analytics',
  templateUrl: './text-analytics.component.html',
  styleUrls: ['./text-analytics.component.css']
})
export class TextAnalyticsComponent {
  @Input() analytics: TextAnalytics;

  get Text(): string {
    return this.analytics.text
  }

  get Keywords(): KeywordAnalytics[] {
    return this.analytics.keywords;
  }
}
