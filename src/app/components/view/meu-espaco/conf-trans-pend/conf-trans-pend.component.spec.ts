import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfTransPendComponent } from './conf-trans-pend.component';

describe('ConfTransPendComponent', () => {
  let component: ConfTransPendComponent;
  let fixture: ComponentFixture<ConfTransPendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfTransPendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfTransPendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
