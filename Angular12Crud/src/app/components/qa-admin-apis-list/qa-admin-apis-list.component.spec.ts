import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaAdminApisListComponent } from './qa-admin-apis-list.component';

describe('QaAdminApisListComponent', () => {
  let component: QaAdminApisListComponent;
  let fixture: ComponentFixture<QaAdminApisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaAdminApisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaAdminApisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
