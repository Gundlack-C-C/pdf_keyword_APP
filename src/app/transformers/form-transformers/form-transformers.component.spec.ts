/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormTransformersComponent } from './form-transformers.component';

describe('FormTransformersComponent', () => {
  let component: FormTransformersComponent;
  let fixture: ComponentFixture<FormTransformersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTransformersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTransformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
