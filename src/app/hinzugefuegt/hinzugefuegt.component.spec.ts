import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HinzugefuegtComponent} from './hinzugefuegt.component';

describe('HinzugefuegtComponent', () => {
  let component: HinzugefuegtComponent;
  let fixture: ComponentFixture<HinzugefuegtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinzugefuegtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinzugefuegtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
