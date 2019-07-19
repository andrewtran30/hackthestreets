import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqaPage } from './freqa.page'  

describe('FreqPage', () => {
  let component: FreqaPage;
  let fixture: ComponentFixture<FreqaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreqaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreqaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});