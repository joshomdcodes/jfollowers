import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramOauthComponent } from './instagram-oauth.component';

describe('InstagramOauthComponent', () => {
  let component: InstagramOauthComponent;
  let fixture: ComponentFixture<InstagramOauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramOauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
