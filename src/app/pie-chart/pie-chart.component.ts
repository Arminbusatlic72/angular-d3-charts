import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-pie-chart',
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  @ViewChild('chart') private chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.createPieChart();
  }

  private createPieChart(): void {
    const data = [10, 20, 30, 40];
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3
      .scaleOrdinal<string>()
      .domain(data.map(String))
      .range(d3.schemeCategory10);

    const pie = d3.pie<number>();
    const arc = d3
      .arc<d3.PieArcDatum<number>>()
      .innerRadius(0)
      .outerRadius(radius);

    svg
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr('fill', (_, i) => color(String(i)) as string)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);
  }
}
