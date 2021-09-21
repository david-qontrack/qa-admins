import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaAdminApisDetailsComponent } from './qa-admin-apis-details.component';

describe('QaAdminApisDetailsComponent', () => {
  let component: QaAdminApisDetailsComponent;
  let fixture: ComponentFixture<QaAdminApisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaAdminApisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaAdminApisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
