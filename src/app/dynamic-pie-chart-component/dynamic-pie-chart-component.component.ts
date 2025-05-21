import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-dynamic-pie-chart-component',
  imports: [],
  templateUrl: './dynamic-pie-chart-component.component.html',
  styleUrl: './dynamic-pie-chart-component.component.scss',
})
export class DynamicPieChartComponentComponent implements AfterViewInit {
  @ViewChild('chartContainer') private chartContainer!: ElementRef;
  chart: any;
  private svg:
    | d3.Selection<SVGSVGElement, unknown, null, undefined>
    | undefined;
  private arc: any;
  private pie: any;
  private path: any;
  private arcTween: any;
  private chartNode: any;
  private data: any[] = [];

  ngAfterViewInit(): void {
    this.data = d3.tsvParse(
      `apples\toranges
53245\t200
28479\t200
19697\t200
24037\t200
40245\t200`,
      d3.autoType
    );

    this.createChart();
  }

  createChart(): void {
    const width = 500;
    const height = Math.min(500, width / 2);
    const outerRadius = height / 2 - 10;
    const innerRadius = outerRadius * 0.75;
    const color = d3.scaleOrdinal(d3.schemeTableau10);
    const tau = 2 * Math.PI;

    this.arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    this.pie = d3
      .pie()
      .sort(null)
      .value((d: any) => d['apples']);

    this.svg = d3
      .select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('viewBox', [-width / 2, -height / 2, width, height] as any);

    this.path = this.svg
      .datum(this.data)
      .selectAll('path')
      .data(this.pie(this.data))
      .join('path')
      .attr('fill', (_d: any, i: number) => color(i.toString()))
      .attr('d', this.arc)
      .each(function (d: any) {
        // @ts-ignore
        this._current = d;
      });

    // Define arcTween function for smooth transitions
    this.arcTween = function (this: any, a: any) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function (t: number) {
        return d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)(
          i(t)
        )!;
      };
    };
  }

  changeValue(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    if (this.chart && typeof this.chart.change === 'function') {
      this.chart.change(value);
    }
  }
}
