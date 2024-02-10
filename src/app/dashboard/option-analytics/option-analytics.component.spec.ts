import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionAnalyticsComponent } from './option-analytics.component';

describe('OptionAnalyticsComponent', () => {
  let component: OptionAnalyticsComponent;
  let fixture: ComponentFixture<OptionAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionAnalyticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
