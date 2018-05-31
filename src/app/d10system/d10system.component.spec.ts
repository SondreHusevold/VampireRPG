import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D10systemComponent } from './d10system.component';

describe('D10systemComponent', () => {
  let component: D10systemComponent;
  let fixture: ComponentFixture<D10systemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D10systemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D10systemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
