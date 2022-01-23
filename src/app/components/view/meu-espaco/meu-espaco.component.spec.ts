import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuEspacoComponent } from './meu-espaco.component';

describe('MeuEspacoComponent', () => {
  let component: MeuEspacoComponent;
  let fixture: ComponentFixture<MeuEspacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuEspacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuEspacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
