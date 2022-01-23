import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfCegaPendComponent } from './conf-cega-pend.component';

describe('ConfCegaPendComponent', () => {
  let component: ConfCegaPendComponent;
  let fixture: ComponentFixture<ConfCegaPendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfCegaPendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfCegaPendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
