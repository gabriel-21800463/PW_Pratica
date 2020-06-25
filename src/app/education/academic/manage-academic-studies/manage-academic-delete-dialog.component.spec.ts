import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicDeleteDialogComponent } from './manage-academic-delete-dialog.component';

describe('ManageAcademicDeleteDialogComponent', () => {
  let component: ManageAcademicDeleteDialogComponent;
  let fixture: ComponentFixture<ManageAcademicDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAcademicDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAcademicDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
