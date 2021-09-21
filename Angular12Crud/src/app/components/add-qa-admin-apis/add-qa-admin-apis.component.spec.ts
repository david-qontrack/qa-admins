import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQaAdminApisComponent } from './add-qa-admin-apis.component';

describe('AddQaAdminApisComponent', () => {
  let component: AddQaAdminApisComponent;
  let fixture: ComponentFixture<AddQaAdminApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQaAdminApisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQaAdminApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
