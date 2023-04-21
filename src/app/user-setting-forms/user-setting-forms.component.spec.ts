import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingFormsComponent } from './user-setting-forms.component';

describe('UserSettingFormsComponent', () => {
  let component: UserSettingFormsComponent;
  let fixture: ComponentFixture<UserSettingFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
