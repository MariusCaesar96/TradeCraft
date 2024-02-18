import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioValueCardComponent } from './portfolio-value-card.component';

describe('PortfolioValueCardComponent', () => {
  let component: PortfolioValueCardComponent;
  let fixture: ComponentFixture<PortfolioValueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioValueCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioValueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
