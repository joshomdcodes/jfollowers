import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramDashboardComponent } from './instagram-dashboard.component';

describe('InstagramDashboardComponent', () => {
  let component: InstagramDashboardComponent;
  let fixture: ComponentFixture<InstagramDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
