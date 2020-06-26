import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnviversityComponent } from './unviversity.component';

describe('UnviversityComponent', () => {
  let component: UnviversityComponent;
  let fixture: ComponentFixture<UnviversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnviversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnviversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
