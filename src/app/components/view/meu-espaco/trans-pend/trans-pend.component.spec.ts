import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransPendComponent } from './trans-pend.component';

describe('TransPendComponent', () => {
  let component: TransPendComponent;
  let fixture: ComponentFixture<TransPendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransPendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransPendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
