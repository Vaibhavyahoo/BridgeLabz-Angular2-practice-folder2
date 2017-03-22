/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EqualValidateComponent } from './equal-validate.component';

describe('EqualValidateComponent', () => {
  let component: EqualValidateComponent;
  let fixture: ComponentFixture<EqualValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqualValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
