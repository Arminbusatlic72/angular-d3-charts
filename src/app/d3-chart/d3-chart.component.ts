import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-chart',
  template: `<h2>Bar Chart's</h2>
    <figure id="chart" class="chart-container"></figure>`,
})
export class D3ChartComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const data = [100, 15, 30, 40, 20];

    const width = 400;
    const height = 200;

    const svg = d3
      .select(this.el.nativeElement.querySelector('#chart'))
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
