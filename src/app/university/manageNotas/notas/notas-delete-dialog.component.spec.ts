import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasDeleteDialogComponent } from './notas-delete-dialog.component';

describe('NotasDeleteDialogComponent', () => {
  let component: NotasDeleteDialogComponent;
  let fixture: ComponentFixture<NotasDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
