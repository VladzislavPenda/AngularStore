import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { Stats, StorageStatistic } from 'src/app/backend/dto/statisticDto';

type Theme = 'light-theme' | 'dark-theme';

@Component({
  selector: 'app-store-statistic',
  templateUrl: './store-statistic.component.html',
  styleUrls: ['./store-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreStatisticComponent implements OnInit {
  public stats$: Observable<Stats>;
  public ctx: any;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly backendService: BackendService
  ) {}

  ngOnInit() {
    this.stats$ = this.backendService.statistic
      .storageStatistic$()
      .pipe(map((e) => e.stats));
    // .subscribe((e) => {
    //   this.stats = e;
    //   console.log(this.stats);
    //   this.ctx = document.getElementById('myChart');
    //   this.setTime(this.stats);
    // });

    Chart.register(...registerables);
    // this.ctx = (this.elementRef.nativeElement as Element).getElementsByTagName(
    //   'canvas'
    // );
    // this.ctx = document.getElementById('myChart2');
  }

  public getAvailableStats(stats: Stats) {
    let statsList = Object.keys(stats);
    if (statsList[0] === '$id') statsList.shift();
    return statsList;
  }
}
