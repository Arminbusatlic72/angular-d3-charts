import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPieChartComponentComponent } from './dynamic-pie-chart-component.component';

describe('DynamicPieChartComponentComponent', () => {
  let component: DynamicPieChartComponentComponent;
  let fixture: ComponentFixture<DynamicPieChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicPieChartComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicPieChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
