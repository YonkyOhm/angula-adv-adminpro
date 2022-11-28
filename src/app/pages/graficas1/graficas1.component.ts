import { Component } from '@angular/core';
import { ChartData, ChartType,} from 'chart.js';
//import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: ['./graficas1.component.css']
})
export class Graficas1Component {
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  
}
