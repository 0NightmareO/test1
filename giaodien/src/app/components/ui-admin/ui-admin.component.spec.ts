import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAdminComponent } from './ui-admin.component';

describe('UiAdminComponent', () => {
  let component: UiAdminComponent;
  let fixture: ComponentFixture<UiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
