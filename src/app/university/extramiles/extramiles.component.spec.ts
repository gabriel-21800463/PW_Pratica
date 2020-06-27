import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtramilesComponent } from './extramiles.component';

describe('ExtramilesComponent', () => {
  let component: ExtramilesComponent;
  let fixture: ComponentFixture<ExtramilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtramilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtramilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
