import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaAdminApisComponent } from './qa-admin-apis.component';

describe('QaAdminApisComponent', () => {
  let component: QaAdminApisComponent;
  let fixture: ComponentFixture<QaAdminApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaAdminApisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaAdminApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
