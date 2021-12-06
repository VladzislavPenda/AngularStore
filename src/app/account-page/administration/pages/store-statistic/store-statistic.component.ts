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
import { StoreStatisticService } from './store-statistic.service';

type Theme = 'light-theme' | 'dark-theme';

@Component({
  selector: 'app-store-statistic',
  templateUrl: './store-statistic.component.html',
  styleUrls: ['./store-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StoreStatisticService],
})
export class StoreStatisticComponent implements OnInit {
  public stats$: Observable<Stats>;
  public statistics$: Observable<StorageStatistic>;
  public ctx: any;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly backendService: BackendService,
    private readonly service: StoreStatisticService
  ) {}

  ngOnInit() {
    this.stats$ = this.backendService.statistic
      .getStorageStatistic$()
      .pipe(map((e) => e.stats));

    this.statistics$ = this.service.getStats();

    Chart.register(...registerables);
  }

  public getAvailableStats(stats: Stats) {
    let statsList = Object.keys(stats);
    if (statsList[0] === '$id') statsList.shift();
    return statsList;
  }
}
