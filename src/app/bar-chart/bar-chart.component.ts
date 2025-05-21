import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-bar-chart',
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  @ViewChild('chart') private chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.createBarChart();
  }

  private createBarChart(): void {
    const data = [100, 15, 30, 40, 20];
    const width = 400;
    const height = 200;

    const svg = d3
      .select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => i * 60)
      .attr('y', (d) => height - d)
      .attr('width', 50)
      .attr('height', (d) => d)
      .attr('fill', 'steelblue');
  }
}
