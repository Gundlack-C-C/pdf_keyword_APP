/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormTfidfComponent } from './form-tfidf.component';

describe('FormTfidfComponent', () => {
  let component: FormTfidfComponent;
  let fixture: ComponentFixture<FormTfidfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTfidfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTfidfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
