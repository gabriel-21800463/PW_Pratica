import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicUpdateComponent } from './manage-academic-update.component';

describe('ManageAcademicUpdateComponent', () => {
  let component: ManageAcademicUpdateComponent;
  let fixture: ComponentFixture<ManageAcademicUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAcademicUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAcademicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
