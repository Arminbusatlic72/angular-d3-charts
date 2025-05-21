import { Component } from '@angular/core';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { Bar2Component } from './bar2/bar2.component';
import { ScatterComponent } from './scatter/scatter.component';
import { ChartData } from './models/chart-data';
@Component({
  selector: 'app-root',
  imports: [BarComponent, PieComponent, ScatterComponent, Bar2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'd3-angular-demo';
  chartData_2D_1: ChartData = {
    yrange: 200000,
    lineData: [
      { label: 'Vue', value: 166443 },
      { label: 'React', value: 150793 },
      { label: 'Angular', value: 62342 },
      { label: 'Backbone', value: 27647 },
      { label: 'Ember', value: 21471 },
    ],
  };
}
