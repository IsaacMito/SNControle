import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankProdutoComponent } from './rank-produto.component';

describe('RankProdutoComponent', () => {
  let component: RankProdutoComponent;
  let fixture: ComponentFixture<RankProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
