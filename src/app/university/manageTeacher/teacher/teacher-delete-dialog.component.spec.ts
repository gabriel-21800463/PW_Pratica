import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDeleteDialogComponent } from './teacher-delete-dialog.component';

describe('TeacherDeleteDialogComponent', () => {
  let component: TeacherDeleteDialogComponent;
  let fixture: ComponentFixture<TeacherDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
