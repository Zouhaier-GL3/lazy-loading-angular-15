import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionedVendorsComponent } from './mentioned-vendors.component';

describe('MentionedVendorsComponent', () => {
  let component: MentionedVendorsComponent;
  let fixture: ComponentFixture<MentionedVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentionedVendorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionedVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
