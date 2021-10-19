/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarCatalogListComponent } from './car-catalog-list.component';

describe('CarCatalogListComponent', () => {
  let component: CarCatalogListComponent;
  let fixture: ComponentFixture<CarCatalogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCatalogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCatalogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
