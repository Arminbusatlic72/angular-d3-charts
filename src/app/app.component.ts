import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DynamicPieChartComponentComponent } from './dynamic-pie-chart-component/dynamic-pie-chart-component.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
@Component({
  selector: 'app-root',
  imports: [
    BarChartComponent,
    PieChartComponent,
    DynamicPieChartComponentComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'd3-angular-demo';
}
