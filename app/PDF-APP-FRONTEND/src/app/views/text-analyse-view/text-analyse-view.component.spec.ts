/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextAnalyseViewComponent } from './text-analyse-view.component';

describe('TextAnalyseViewComponent', () => {
  let component: TextAnalyseViewComponent;
  let fixture: ComponentFixture<TextAnalyseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAnalyseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnalyseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
