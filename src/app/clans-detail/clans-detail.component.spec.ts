import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClansDetailComponent } from './clans-detail.component';

describe('ClansDetailComponent', () => {
  let component: ClansDetailComponent;
  let fixture: ComponentFixture<ClansDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClansDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClansDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
