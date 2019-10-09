import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngeclicktComponent } from './hinzugefuegt.component';

describe('AngeclicktComponent', () => {
  let component: AngeclicktComponent;
  let fixture: ComponentFixture<AngeclicktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngeclicktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngeclicktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
