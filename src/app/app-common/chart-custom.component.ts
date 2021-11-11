import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { CharacteristicEnt } from '../backend/dto/statisticDto';
import { Chart, ChartItem, registerables } from 'chart.js';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-chart-custom',
  templateUrl: './chart-custom.component.html',
  styleUrls: ['./chart-custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartCustomComponent implements OnInit {
  @Input() public chartLabel: string;
  @Input() public dataSet: CharacteristicEnt[];
  @Input() public chartType: 'pie' | 'line' = 'pie';
  public ctx: any;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    Chart.register(...registerables);
    this.ctx = (this.elementRef.nativeElement as Element).getElementsByTagName(
      'canvas'
    );

    this.generateChart();
  }

  private generateChart() {
    let label = [];
    let data = [];
    this.dataSet.forEach((elem) => {
      label.push(elem.value);
      data.push(elem.count);
    });

    const myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: label,
        datasets: [
          {
            label: '# of Votes',
            data: data,
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
