import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicDetailComponent } from './manage-academic-detail.component';

describe('ManageAcademicDetailComponent', () => {
  let component: ManageAcademicDetailComponent;
  let fixture: ComponentFixture<ManageAcademicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAcademicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAcademicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
